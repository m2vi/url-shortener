import Full from '@components/Full';
import { Spinner } from '@components/Spinner';
import QrCode from 'qrcode.react';
import { useEffect, useState } from 'react';

const Qrcode = ({ data, error }: any) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`${window?.location?.origin}/${data?.alias}`);
  }, [data?.alias]);

  return (
    <Full className='flex justify-center items-center'>
      <div className='aspect-square w-250 flex justify-center items-center m-8'>
        {url ? <QrCode value={url} fgColor='#0d0d16' bgColor='#ebeef5' size={250} /> : <Spinner />}
      </div>
    </Full>
  );
};

export default Qrcode;
