"use client";

import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import HideIcon from "@/components/icons/HideIcon.jsx";
import ShowIcon from "@/components/icons/ShowIcon.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { login } from "@/lib/redux/auth/operations.ts";
import style from "./SignInForm.module.scss";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .max(50, "Password cannot exceed 50 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    // .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
    .required("Password is required"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(login(values));

      if (result.meta.requestStatus === "fulfilled") {
        console.log("Login successful");
        router.push("/");
      } else {
        toast.error(result.payload || "Login failed");
      }
    } catch (error) {
      toast.error("An unknown error occurred during login");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="text-black">
      <h1 className="flex justify-center text-[40px] text-blue-800 mb-2">Log in</h1>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        // rememberMe: ''
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor='email'>
              Email
            </label>
            <Field className="px-3 py-2 text-sm leading-relaxed border-2 border-gray-300 rounded-[8px] transition focus:border-purple-800 focus:text-blue-500 lg:p-3 text-[16px]" type='email' name='email' id='email' placeholder='Enter Email' />
            <ErrorMessage className={style.err} name='email' component='span' />
          </div>
          <div className="flex flex-col">
            <label className="mb-2" htmlFor='password'>
              Password
            </label>
            <div className="relative flex items-center ">
              <Field
                className="w-full px-3 py-2 text-sm leading-relaxed border-2 border-gray-300 rounded-[8px] transition focus:border-purple-800 focus:text-blue-500 lg:p-3 text-[16px] "
                type={showPassword ? "text" : "password"}
                name='password'
                id='password'
                placeholder='Enter Password'
              />
              <button className="w-6 h-6 top-3 right-3 absolute bg-none border-none cursor-pointer " type='button' onClick={() => setShowPassword(prev => !prev)}>
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
            Confirm
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
