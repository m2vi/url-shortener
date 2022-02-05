import shortener from '@utils/shortener';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(401).json({});
  const { alias } = Object.freeze(req.query);

  const data: any = await shortener.delete({ alias: alias?.toString() });

  if (data?.error) {
    return res.status(data?.code).json({ error: data?.error });
  }

  res.status(200).json(data);
}
