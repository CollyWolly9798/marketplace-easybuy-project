'use client';

import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import HideIcon from '@/components/icons/HideIcon.jsx';
import ShowIcon from '@/components/icons/ShowIcon.jsx';
import style from './SignInForm.module.scss';
import { useState } from 'react';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <div className={style.formWrapper}>
      <h1 className={style.title}>Log in</h1>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '', rememberMe: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <div className={style.wrapper}>
            <label className={style.label} htmlFor='email'>
              Email
            </label>
            <Field className={style.input} type='email' name='email' id='email' placeholder='Enter Email' />
            <ErrorMessage className={style.err} name='email' component='span' />
          </div>
          <div className={style.wrapper}>
            <label className={style.label} htmlFor='password'>
              Password
            </label>
            <div className={style.passwordField}>
              <Field
                className={style.input}
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Enter Password'
              />
              <button className={style.toggleBtn} type='button' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            <ErrorMessage className={style.err} name='password' component='span' />
            <div>
              <label className={style.checkbox}>
                <Field type='checkbox' name='rememberMe' id='rememberMe' />
                <p className={style.text}>Remember Me</p>
              </label>
            </div>
          </div>
          <button className={style.submitBtn} type='submit'>
            Next
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
