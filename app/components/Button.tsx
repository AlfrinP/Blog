import { twMerge } from 'tailwind-merge';
import { ButtonPropType } from '../type';

export default function Button({ children, variant = 'primary', ...props }: ButtonPropType) {
  let buttonClassName = '';
  switch (variant) {
    case 'primary':
      buttonClassName = 'border-2 border-slate-900 bg-slate-900 rounded-xl px-4 py-1 text-white cursor-pointer';
      break;
    case 'outline':
      buttonClassName = 'border-2 border-gray-200 rounded-xl px-4 py-1 cursor-pointer';
      break;
    default:
      buttonClassName = '';
  }
  return (
    <button className={twMerge(props.className, buttonClassName)} {...props}>
      {children}
    </button>
  );
}
