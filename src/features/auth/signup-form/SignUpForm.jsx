"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import HideIcon from "@/components/icons/HideIcon.jsx";
import ShowIcon from "@/components/icons/ShowIcon.jsx";
import { useDispatch } from "react-redux";
import { register } from "@/lib/redux/auth/operations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const registrationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  // number: Yup.string()
  //   .matches(/^\+380\d{9}$/, 'Enter a valid phone number (e.g. +380991234567)')
  //   .required('Phone number is required'),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .max(50, "Password cannot exceed 50 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  agreement: Yup.boolean().oneOf([true], "You must accept the User Agreement").required("Required"),
  privacy: Yup.boolean().oneOf([true], "You must accept the Privacy Policy").required("Required"),
});

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(register(values));

      if (register.fulfilled.match(result)) {
        router.push("/check-email");
      } else {
        toast.error(result.payload || "Помилка реєстрації");
      }
    } catch (error) {
      toast.error("Невідома помилка");
    } finally {
      actions.resetForm();
    }
  };

  return (
    <div className="text-black">
      <h1 className="flex justify-center text-[40px] text-blue-800 mb-2">Sign up</h1>
      <Formik
        validationSchema={registrationSchema}
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          agreement: false,
          privacy: false,
          role: "CUSTOMER",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor='email'>
              Email
            </label>
            <Field className="px-3 py-2 text-sm leading-relaxed border-2 border-gray-300 rounded-[8px] transition focus:border-purple-800 focus:text-blue-500 lg:p-3 text-[16px]" type='email' name='email' id='email' placeholder='Enter Email' />
            <ErrorMessage className="min-h-5 text-[12px] text-red-500 pt-2" name='email' component='span' />
          </div>
          {/* <div className={style.wrapper}>
            <label className={style.label} htmlFor='number'>
              Phone Number
            </label>
            <Field className={style.input} type='tel' name='number' id='number' placeholder='+38' />
            <ErrorMessage className={style.err} name='number' component='span' />
          </div> */}
          <div className="flex flex-col">
            <label className="mb-2" htmlFor='password'>
              Password
            </label>
            <div className="relative flex items-center">
              <Field
                  className="w-full px-3 py-2 text-sm leading-relaxed border-2 border-gray-300 rounded-[8px] transition focus:border-purple-800 focus:text-blue-500 lg:p-3 text-[16px] "
                type={showPassword ? "text" : "password"}
                name='password'
                id='password'
                placeholder='Enter Password'
              />
              <button className="w-6 h-6 top-3 right-3 absolute   cursor-pointer " type='button' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            <ErrorMessage className="min-h-5 text-[12px] text-red-500 pt-2" name='password' component='span' />
          </div>
          <div className="flex flex-col">
            <label className="mb-2" htmlFor='repeatPassword'>
              Confirm Password
            </label>
            <div className="relative flex items-center ">
              <Field
                  className="w-full px-3 py-2 text-sm leading-relaxed border-2 border-gray-300 rounded-[8px] transition focus:border-purple-800 focus:text-blue-500 lg:p-3 text-[16px] "
                type={showConfirmPassword ? "text" : "password"}
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm Password'
              />
              <button type='button' onClick={() => setShowConfirmPassword(prev => !prev)} className= "w-6 h-6 top-3 right-3 absolute   cursor-pointer ">
                {showConfirmPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            <ErrorMessage className="min-h-5 text-[12px] text-red-500 pt-2" name='confirmPassword' component='span' />
          </div>
          <div>
            <label className="flex gap-2">
              <Field type='checkbox' name='agreement' id='agreement' />
              <p className="text-[14px] text-blue-500">User Agreement</p>
            </label>
            <ErrorMessage className="min-h-5 text-[12px] text-red-500 pt-2" name='agreement' component='span' />
          </div>
          <div>
            <label className="flex gap-2">
              <Field type='checkbox' name='privacy' id='privacy' />
              <p className="text-[14px] text-blue-500">Privacy Policy</p>
            </label>
            <ErrorMessage className="min-h-5 text-[12px] text-red-500 pt-2" name='privacy' component='span' />
          </div>
          <button className='font-bold rounded-lg px-4 py-3 text-white bg-blue-900 lg:cursor-pointer border-none mb-3' type='submit'>
            Confirm
          </button>
        </Form>
      </Formik>

    </div>
  );
};

export default SignUpForm;
