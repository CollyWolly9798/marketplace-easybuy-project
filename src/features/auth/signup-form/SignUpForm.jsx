'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import HideIcon from '@/components/icons/HideIcon.jsx';
import ShowIcon from '@/components/icons/ShowIcon.jsx';
import style from './SignUpForm.module.scss';

const registrationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter a valid phone number (e.g. +380991234567)')
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  agreement: Yup.boolean().oneOf([true], 'You must accept the User Agreement').required('Required'),
  privacy: Yup.boolean().oneOf([true], 'You must accept the Privacy Policy').required('Required'),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={style.formWrapper}>
      <h1 className={style.title}>Sign up</h1>
      <Formik
        validationSchema={registrationSchema}
        initialValues={{ email: '', number: '', password: '', repeatPassword: '', agreement: '', privacy: '' }}
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
            <label className={style.label} htmlFor='number'>
              Phone Number
            </label>
            <Field className={style.input} type='tel' name='number' id='number' placeholder='+38' />
            <ErrorMessage className={style.err} name='number' component='span' />
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
          </div>
          <div className={style.wrapper}>
            <label className={style.label} htmlFor='repeatPassword'>
              Repeat Password
            </label>
            <div className={style.passwordField}>
              <Field
                className={style.input}
                type={showRepeatPassword ? 'text' : 'password'}
                id='repeatPassword'
                name='repeatPassword'
                placeholder='Repeat Password'
              />
              <button type='button' onClick={() => setShowRepeatPassword(prev => !prev)} className={style.toggleBtn}>
                {showRepeatPassword ? <HideIcon /> : <ShowIcon />}
              </button>{' '}
            </div>
            <ErrorMessage className={style.err} name='repeatPassword' component='span' />
          </div>
          <div>
            <label className={style.checkbox}>
              <Field type='checkbox' name='agreement' id='agreement' />
              <p className={style.text}>User Agreement</p>
            </label>
            <ErrorMessage className={style.err} name='agreement' component='span' />
          </div>
          <div>
            <label className={style.checkbox}>
              <Field type='checkbox' name='privacy' id='privacy' />
              <p className={style.text}>Privacy Policy</p>
            </label>
            <ErrorMessage className={style.err} name='privacy' component='span' />
          </div>
          <button className={style.submitBtn} type='submit'>
            Next
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
