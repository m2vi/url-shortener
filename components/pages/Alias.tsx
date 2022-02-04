import Full from '@components/Full';
import { Spinner } from '@components/Spinner';

const Alias = () => {
  return (
    <Full className='flex justify-center items-center'>
      <div className='flex flex-col items-center'>
        <Spinner size='6' />
        <p className='mt-3 text-sm'>Redirecting...</p>
      </div>
    </Full>
  );
};

export default Alias;
