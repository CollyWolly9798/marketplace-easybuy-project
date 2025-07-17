'use client';

import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import HideIcon from '@/components/icons/HideIcon.tsx';
import ShowIcon from '@/components/icons/ShowIcon.tsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/redux/auth/operations.ts';
import TextInput from '@/components/ui/input/TextInput';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50, 'Password cannot exceed 50 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    // .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
    .required('Password is required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    try {
      const result = await dispatch(login(values));

      if (result.meta.requestStatus === 'fulfilled') {
        toast.success('Login successful');
        router.push('/');
      } else {
        toast.error('Login failed,try again.');
        setErrorState(true);

        setTimeout(() => {
          setErrorState(false);
        }, 3000);
      }
    } catch (error) {
      toast.error('An unknown error occurred during login');
      setErrorState(true);
      setTimeout(() => {
        setErrorState(false);
      }, 3000);
    } finally {
      setIsLoading(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center font-dm font-medium text-[40px] lg:text-[48px]  mb-2">
        Log in
      </h1>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '' }}
        // rememberMe: ''
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col text-black">
          <TextInput name="email" label="Email" placeholder="Enter Email" />

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
          <div className="mb-5">
            <label className="flex gap-2">
              <Field type="checkbox" name="rememberMe" id="rememberMe" />
              <p className="text-[14px] text-blue-500">Remember Me</p>
            </label>
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

export default SignInForm;
