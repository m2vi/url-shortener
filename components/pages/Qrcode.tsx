import Full from '@components/Full';
import { Spinner } from '@components/Spinner';
import Link from 'next/link';
import QrCode from 'qrcode.react';
import { useEffect, useState } from 'react';

const Qrcode = ({ data, error }: any) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`${window?.location?.origin}/${data?.alias}`);
  }, [data?.alias]);

  return (
    <Full className='flex justify-center items-center'>
      <div className='aspect-square m-8'>
        <div className='aspect-square bg-white p-6 rounded-3xl flex flex-col'>
          {url ? (
            <QrCode value={url} size={165} />
          ) : (
            <div className='aspect-square w-165 flex justify-center items-center'>
              <Spinner />
            </div>
          )}
          <div className='mt-6 text-primary-900 font-bold w-full text-center text-lg hover:opacity-70'>
            <Link href={url}>
              <a>{data?.alias}</a>
            </Link>
          </div>
        </div>
      </div>
    </Full>
  );
};

export default Qrcode;
