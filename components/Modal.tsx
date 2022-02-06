import { Dialog, Transition } from '@headlessui/react';
import { useModal } from 'context/useModal';
import { Fragment } from 'react';
import { Button } from './Button';
import copyToClipboard from 'copy-to-clipboard';
import ResultInput from './input/home/result';

const Modal = () => {
  const { state, dispatch } = useModal();

  const open = () => dispatch({ show: true });
  const close = () => dispatch({ show: false });
  const copy = () => copyToClipboard(state?.data?.shortened?.long);

  return (
    <>
      <Transition appear show={state?.show} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={close}>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            <span className='inline-block h-screen align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-primary-900-80 border border-primary-500 backdrop-blur-lg shadow-xl rounded-2xl shadow-1'>
                <div className='flex w-full'>
                  <ResultInput />
                </div>

                <div className='mt-7 flex justify-start'>
                  <Button className='mr-1' onClick={copy}>
                    Copy URL
                  </Button>
                  <Button color='primary-transparent' onClick={close}>
                    Create new
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
