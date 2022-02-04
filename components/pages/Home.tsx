import shortener from '@utils/frontend/shortener';
import { createRef, MouseEvent, useState } from 'react';
import { Button } from '../Button';
import Full from '../Full';
import AliasInput from '../input/home/alias';
import UrlInput from '../input/home/url';

const Home = () => {
  const [block, setBlock] = useState(false);
  const UrlRef = createRef<HTMLInputElement>();
  const AliasRef = createRef<HTMLInputElement>();

  const handleSubmit = () => {
    if (block) return;
    const url = UrlRef?.current?.value;
    const alias = AliasRef?.current?.value;

    setBlock(true);
    shortener
      .insert({ link: url, alias })
      .then((data) => {
        console.log(data);
      })
      .catch((reason) => console.log(reason))
      .then(() => setBlock(false));

    console.log(url, alias);
  };

  return (
    <Full className='flex justify-center items-center'>
      <div className='max-w-sm w-full'>
        <UrlInput ref={UrlRef} className='mb-2' />
        <AliasInput ref={AliasRef} className='mb-1' />
        <p className='text-xs mb-2 text-primary-300'>*Optional</p>
        <Button className='mt-4' size='big' onClick={handleSubmit}>
          Shorten
        </Button>
      </div>
    </Full>
  );
};

export default Home;
