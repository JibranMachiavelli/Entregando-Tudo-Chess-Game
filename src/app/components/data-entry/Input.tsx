import React from 'react';

type InputProps = {
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'password' | 'email' | 'tel';
  placeholder?: string;
  label?: string;
  labelPlaceholder?: string;
};

export default function Input({
  size = 'medium',
  type = 'text',
  placeholder = '',
  label,
  labelPlaceholder,
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`
        ${
          {
            small: 'w-48 h-10',
            medium: 'w-56 h-10',
            large: 'w-64 h-10',
          }[size]
        }
          peer block rounded-md border bg-transparent
          transition-all duration-200 px-3
          [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
        `}
      />
      {label && (
        <label
          className="absolute left-3 top-[0.37rem] max-w-[90%] origin-[0_0]
        transition-all duration-200 ease-out
        peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]
      peer-focus:bg-white rounded-md"
          style={{
            pointerEvents: 'none',
            zIndex: 1,
            border: '1px solid transparent',
          }}
          htmlFor={placeholder}
        >
          <span style={{ color: 'gray' }}>{labelPlaceholder}</span>
        </label>
      )}
    </div>
  );
}
