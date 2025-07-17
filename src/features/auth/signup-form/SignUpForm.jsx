'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import HideIcon from '@/components/icons/HideIcon.tsx';
import ShowIcon from '@/components/icons/ShowIcon.tsx';
import { useDispatch } from 'react-redux';
import { register } from '@/lib/redux/auth/operations';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import TextInput from '@/components/ui/input/TextInput';

const registrationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter a valid phone number (e.g. +380991234567)')
    .required('Phone number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50, 'Password cannot exceed 50 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  agreement: Yup.boolean().oneOf([true], 'You must accept the User Agreement').required('Required'),
  privacy: Yup.boolean().oneOf([true], 'You must accept the Privacy Policy').required('Required'),
});

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    try {
      const result = await dispatch(register(values));

      if (register.fulfilled.match(result)) {
        router.push('/check-email');
      } else {
        toast.error('Registration failed.');
        setErrorState(true);

        setTimeout(() => {
          setErrorState(false);
        }, 3000);
      }
    } catch (error) {
      toast.error('An unknown error occurred during register');
      setErrorState(true);

      setTimeout(() => {
        setErrorState(false);
      }, 3000);
    } finally {
      setIsLoading(false);
      actions.resetForm();
    }
  };

  return (
    <div>
      <h1 className="flex justify-center font-dm font-medium text-[40px] lg:text-[48px] mb-2">
        Sign up
      </h1>
      <Formik
        validationSchema={registrationSchema}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          agreement: false,
          privacy: false,
          role: 'CUSTOMER',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col text-black ">
          <TextInput name="email" label="Email" placeholder="Enter Email" />

          <TextInput name="number" label="Phone number" placeholder="Enter Phone number" />

          <TextInput
            name="password"
            label="Password"
            placeholder="Enter password"
            type="password"
            showPasswordToggle
            showPassword={showPassword}
            togglePasswordVisibility={() => setShowPassword((prev) => !prev)}
            icon={showPassword ? <HideIcon /> : <ShowIcon />}
          />

          <TextInput
            name="confirmPassword"
            label="Сonfirm Password"
            placeholder="Сonfirm Password"
            type="password"
            showPasswordToggle
            showPassword={showConfirmPassword}
            togglePasswordVisibility={() => setShowConfirmPassword((prev) => !prev)}
            icon={showConfirmPassword ? <HideIcon /> : <ShowIcon />}
          />

          <div className="h-[45px]">
            <label className="flex gap-2 ">
              <Field type="checkbox" name="agreement" id="agreement" />
              <p className="text-[14px] text-blue-500">User Agreement</p>
            </label>
            <ErrorMessage
              className="min-h-5 text-[12px] text-red-500 pt-2"
              name="agreement"
              component="span"
            />
          </div>
          <div className="mb-2 h-[45px]">
            <label className="flex gap-2 ">
              <Field type="checkbox" name="privacy" id="privacy" />
              <p className="text-[14px] text-blue-500">Privacy Policy</p>
            </label>
            <ErrorMessage
              className="min-h-5 text-[12px] text-red-500 pt-2"
              name="privacy"
              component="span"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`
    font-bold rounded-lg px-4 py-3 text-white transition-colors duration-300
    ${errorState ? 'bg-red-600' : 'bg-blue-900 hover:bg-blue-800'}
    ${isLoading ? 'opacity-70 cursor-not-allowed' : 'lg:cursor-pointer'}
    border-none mb-3
  `}
          >
            {isLoading ? 'Loading...' : 'Confirm'}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
