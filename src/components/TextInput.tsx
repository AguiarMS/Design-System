import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps {
  children: ReactNode;
}

export function TextInputRoot(props: TextInputInputProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full outline-none focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

export interface TextInputProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInputInput(props: TextInputInputProps) {

  return (
    <input className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder: text-gray-400'
      {...props}
    />
  )
}

TextInputIcon.displayName = 'TextInputIcon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}