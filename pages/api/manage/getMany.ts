import shortener from '@utils/shortener';
import { removeEmpty } from '@utils/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(401).json({});
  const { link, alias } = Object.freeze(req.query);

  const data: any = await shortener.getMany(removeEmpty({ link, alias }));

  if (data?.error) {
    return res.status(data?.code).json({ error: data?.error });
  }

  res.status(200).json(data);
}
