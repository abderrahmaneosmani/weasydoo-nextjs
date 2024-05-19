"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

function LoginPage() {
  async function handleSubmitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formLogin = new FormData(event?.currentTarget);
    const username = formLogin.get("username");
    const password = formLogin.get("password");

    signIn("credentials", {
      username,
      password,
    }).then((res) => res);
  }

  return (
    <div className="grid grid-cols-2">
      <form
        onSubmit={handleSubmitLogin}
        className="flex flex-col items-center py-20  justify-start  w-full max-w-sm mx-auto  bg-white shadow-md rounded-md"
      >
        <p className="text text-2xl items-center text-blue-500 py-20">
          Login Page
        </p>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="border border-gray-300 rounded-md px-4 py-2  my-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          className="border border-gray-300 round-md px-4 py-2  mb-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Connect{" "}
        </button>
      </form>

      <div>
        <img
          src="https://images.unsplash.com/photo-1715630915104-1f319c1154af?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginPage;
