import QueryString from 'qs';
import { LinkProps, DeleteProps, GetProps } from '../types';

class Shortener {
  async insert(input: Partial<LinkProps>) {
    const qs = QueryString.stringify(input);

    const data = await (await fetch(`/api/manage/insert?${qs}`)).json();

    if (data?.error) throw Error(data?.error);

    return {
      shortened: {
        long: `${window?.location?.origin}/${data?.alias}`,
        short: `${window?.location?.host}/${data?.alias}`,
        alias: data?.alias,
      },
      query: input,
    };
  }

  async delete(input: DeleteProps) {
    const qs = QueryString.stringify(input);

    const data = await (await fetch(`/api/manage/delete?${qs}`)).json();

    if (data?.error) throw Error(data?.error);

    return data;
  }

  async get(input: GetProps) {
    const qs = QueryString.stringify(input);

    const data = await (await fetch(`/api/manage/get?${qs}`)).json();

    if (data?.error) throw Error(data?.error);

    return data;
  }
}

export const shortener = new Shortener();
export default shortener;
