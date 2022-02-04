import Link from 'next/link';
import { useRouter } from 'next/router';
import { createRef } from 'react';
import Full from '@components/Full';
import Input from '@components/input/404';

const FourOhFour = () => {
  const InputRef = createRef<HTMLInputElement>();
  const Router = useRouter();

  const submit = () => {
    const value = InputRef?.current?.value;
    console.log(value);
    if (!value) return;

    Router.push('/[alias]', `/${encodeURIComponent(value)}`);
  };

  return (
    <Full className='text-center flex justify-center items-center'>
      <div className='mb-4 max-w-md w-full flex items-center flex-col'>
        <h1 className='text-7xl'>404</h1>
        <p className='text-lg mb-4'>The alias was not found or was deleted</p>
        <Input ref={InputRef} onKeyDown={(e) => e.code === 'Enter' && submit()} />
        <p className='mt-2'>
          or{' '}
          <Link href='/' as='/'>
            <a className='underline hover:text-primary-200'>create a new alias</a>
          </Link>
        </p>
      </div>
    </Full>
  );
};

export default FourOhFour;
