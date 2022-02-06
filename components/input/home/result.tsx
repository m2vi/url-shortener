import { LinkIcon } from '@heroicons/react/outline';
import { useModal } from 'context/useModal';
import React, { ForwardedRef, HTMLAttributes } from 'react';

const Input = React.forwardRef(({ className, ...props }: HTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
  const { state, dispatch } = useModal();

  return (
    <div className={`border border-primary-600 overflow-hidden px-2 rounded-8 w-full flex items-center justify-between ${className}`}>
      <LinkIcon className='h-4 w-4 text-primary-300 mr-1' />
      <input
        className={`bg-transparent w-full px-1 placeholder:text-primary-300 text-primary-100 h-8 leading-4`}
        type='url'
        placeholder='Shortened URL'
        value={state?.data?.shortened?.short}
        readOnly
        ref={ref}
        {...props}
      ></input>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
