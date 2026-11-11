'use client';
import { ComponentProps, useState } from 'react';
import Input from './input';
import { Eye, EyeOff } from 'lucide-react';

function Password({ ...props }: ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className='relative'>
      <Input type={showPassword ? 'text' : 'password'} {...props} />
      <button
        type='button'
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        aria-pressed={showPassword}
        className='cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none'
      >
        {showPassword ? (
          <EyeOff className='h-4 w-4' />
        ) : (
          <Eye className='h-4 w-4' />
        )}
      </button>
    </div>
  );
}

export { Password };
