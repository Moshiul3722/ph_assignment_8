"use client";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  const onSubmithandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(e.target.value);
  };
  return (
    <div className="max-w-7xl mx-auto border-2 rounded-md py-10 my-10 border-slate-200">
      <div className="w-3/12 mx-auto">
        <h2 className="text-center my-8 text-2xl font-bold">Sign Up</h2>
        <form onSubmit={onSubmithandler}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type your name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Type your email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo-url (link)</legend>
            <input
              type="text"
              className="input"
              name="photo-url"
              placeholder="Photo-url (link)"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Type your password"
            />
          </fieldset>

          <Link href={"/login"} className="btn w-full mt-3">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
