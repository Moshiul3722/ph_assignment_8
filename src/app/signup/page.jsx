"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto border-2 rounded-md py-10 my-10 border-slate-200">
      <div className="w-3/12 mx-auto">
        <h2 className="text-center my-8 text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your name"
              {...register("name", { required: "Name field is required." })}
            />
            {errors.name && (
              <p className="text-red-400">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: "Email field is required." })}
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo-url (link)</legend>
            <input
              type="text"
              className="input"
              placeholder="Photo-url (link)"
              {...register("photo_url", {
                required: "Photo-url field is required.",
              })}
            />
            {errors.photo_url && (
              <p className="text-red-400">{errors.photo_url.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type your password"
              {...register("password", {
                required: "Password field is required.",
              })}
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn btn-outline border-slate-300 w-full mt-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
