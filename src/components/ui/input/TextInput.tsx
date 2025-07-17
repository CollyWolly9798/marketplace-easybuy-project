import React from 'react';
import { useField } from 'formik';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  icon?: React.ReactNode;
}

export default function TextInput({
  label,
  showPasswordToggle,
  showPassword,
  togglePasswordVisibility,
  icon,
  ...props
}: TextInputProps) {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;
  const isDisabled = props.disabled;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.name} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...field}
          {...props}
          type={showPasswordToggle && showPassword ? 'text' : props.type}
          className={`
            w-full rounded-lg px-4 py-2 text-sm lg:text-[16px]
            border transition placeholder:text-gray-500 outline-none
            ${hasError ? 'border-red-500 bg-red-50 text-red-800' : 'border-[#e2e2e2] bg-white text-gray-900'}
            ${!hasError && 'focus:border-[#4e46b4] focus:ring-[rgba(78,70,180,0.2)] focus:ring-4'}
            ${isDisabled && 'bg-gray-100 cursor-not-allowed text-gray-400'}
            hover:border-gray-400
            ${showPasswordToggle ? 'pr-10' : ''}
          `}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 -translate-y-1/2 w-6 h-6 text-gray-500 hover:text-gray-700"
          >
            {icon}
          </button>
        )}
      </div>

      <p className="mt-1 text-xs min-h-[18px] text-red-600">{hasError ? meta.error : ''}</p>
    </div>
  );
}
