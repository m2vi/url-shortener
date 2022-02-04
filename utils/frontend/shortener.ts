import QueryString from 'qs';
import { LinkProps, DeleteProps, GetProps } from '../types';

class Shortener {
  async insert(input: Partial<LinkProps>) {
    const qs = QueryString.stringify(input);

    return await (await fetch(`/api/manage/insert?${qs}`)).json();
  }

  async delete(input: DeleteProps) {
    const qs = QueryString.stringify(input);

    return await (await fetch(`/api/manage/delete?${qs}`)).json();
  }

  async get(input: GetProps) {
    const qs = QueryString.stringify(input);

    return await (await fetch(`/api/manage/get?${qs}`)).json();
  }
}

export const shortener = new Shortener();
export default shortener;
