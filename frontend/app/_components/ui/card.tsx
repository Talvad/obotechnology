import { ComponentProps } from 'react';

function Card({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`shadow border border-gray-100 rounded px-4 py-6 ${className}`}
      {...props}
    />
  );
}
function CardHeader({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`border-b border-b-gray-200 pb-1 px-2 ${className}`}
      {...props}
    />
  );
}
function CardDescription({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`text-sm text-gray-500 ${className}`} {...props} />;
}
function CardTitle({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`text-lg font-medium text-gray-700 ${className}`}
      {...props}
    />
  );
}
function CardContent({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`px-2 ${className}`} {...props} />;
}
function CardAction({ ...props }: ComponentProps<'div'>) {
  return <div {...props} />;
}
function CardFooter({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`border-t border-t-gray-200 pt-2 mt-2 ${className}`}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardAction,
  CardFooter,
};
