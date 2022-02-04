import { LinkIcon } from '@heroicons/react/outline';
import React, { ForwardedRef, HTMLAttributes } from 'react';

const Input = React.forwardRef(({ className, ...props }: HTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={`border border-primary-600 overflow-hidden px-2 rounded-8 w-full flex items-center justify-between ${className}`}>
      <LinkIcon className='h-4 w-4 text-primary-300 mr-1' />
      <input
        className={`bg-transparent w-full px-1 placeholder:text-primary-300 text-primary-100 h-8 leading-4`}
        type='url'
        placeholder='Shorten your link'
        ref={ref}
        {...props}
      ></input>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
