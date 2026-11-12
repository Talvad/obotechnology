import { ComponentProps } from 'react';

export default function FileInput({ ...props }: ComponentProps<'input'>) {
  return (
    <div className='flex items-center justify-center w-40'>
      <label
        htmlFor={props.id}
        className='flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <svg
            className='w-8 h-8 mb-3 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
            />
          </svg>
          <p className='mb-2 text-sm text-gray-500'>
            <span className='font-semibold'>Click to upload</span>
          </p>
          <p className='text-xs text-gray-500'>Image (MAX. 8MB)</p>
        </div>
        <input type='file' className='hidden' {...props} />
      </label>
    </div>
  );
}
