import Modal from '@components/Modal';
import shortener from '@utils/frontend/shortener';
import { useModal } from 'context/useModal';
import { createRef, useEffect, useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import { Button } from '../Button';
import Full from '../Full';
import AliasInput from '../input/home/alias';
import UrlInput from '../input/home/url';

const Home = () => {
  const { state, dispatch } = useModal();
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
        console.log(data?.shortened);
        dispatch({ show: true, data });
      })
      .catch((reason) =>
        toast(reason?.message, {
          className: 'error-toast',
          bodyClassName: 'font-medium m-0',
          icon: <ExclamationCircleIcon className='h-4 w-4' color='white' />,
          closeButton: (props) => {
            return <XIcon className='h-3 w-3 opacity-80 hover:opacity-100' onClick={() => props?.closeToast()} />;
          },
          type: 'error',
        })
      )
      .then(() => setBlock(false));

    console.log(url, alias);
  };

  useEffect(() => console.log(state), [state]);

  return (
    <Full className='flex justify-center items-center'>
      <div className='max-w-lg w-full'>
        <div className='flex w-full mb-2'>
          <UrlInput className='mr-2 w-full' ref={UrlRef} />
          <Button size='big' onClick={handleSubmit}>
            Shorten
          </Button>
        </div>
        <div className='flex flex-col w-full'>
          <AliasInput ref={AliasRef} className='mb-1' />
          <p className='text-xs mb-2 text-primary-300'>*Optional</p>
        </div>
        <Modal />
      </div>
    </Full>
  );
};

export default Home;
