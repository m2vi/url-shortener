import { FilterQuery } from 'mongoose';
import validator from 'validator';
import alias, { Alias } from './alias';
import database from './db';
import { ValidateInputProps, LinkProps, DeleteProps, GetProps } from './types';

class Shortener {
  alias: Alias;
  constructor() {
    this.alias = alias;
  }

  private validateInput(input: any): ValidateInputProps {
    const { link, alias } = Object.freeze(input);

    if (!validator.isURL(link, { protocols: ['http', 'https'] })) {
      return {
        valid: false,
        error: 'given link parameter is not a valid url',
        code: 400,
      };
    }

    if (link?.length > 2048) {
      return {
        valid: false,
        error: 'maximum url length exceeded',
        code: 413,
      };
    }

    if (alias && !alias?.match(new RegExp(`[a-zA-Z0-9\-_]`))) {
      return {
        valid: false,
        error: 'parameter alias is malformed',
        code: 400,
      };
    }

    return {
      valid: true,
      error: null,
      code: 200,
    };
  }

  async insert(input: LinkProps) {
    try {
      const { valid, error, code } = this.validateInput(input);
      if (!valid) return { error, code };

      return await database.insert({ link: input?.link, alias: this.alias.createAlias(input?.alias) });
    } catch (error) {
      return { error: 'alias already exists', code: 400 };
    }
  }

  async delete(input: DeleteProps) {
    return await database.delete(input);
  }

  async get(input: GetProps) {
    try {
      const { alias } = Object.freeze(input);

      const data = await database.findOne({ alias });

      if (!data) throw Error('alias was not found');

      return { link: data?.link, alias: data?.alias };
    } catch (error) {
      return { error: 'alias was not found', code: 404 };
    }
  }

  async getMany(input: FilterQuery<LinkProps>) {
    try {
      const data = await database.findMany(input);

      if (!data) throw Error('Query was not found');

      return data;
    } catch (error) {
      return { error: 'database error', code: 500 };
    }
  }
}

export const shortener = new Shortener();
export default shortener;
