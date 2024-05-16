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
    <div className="flex items-center justify-center mt-20 flex-col">
      <p className="text text-3xl text-blue-700">Login Page</p>

      <div className="flex flex-col justify-start items-center mt-20 ">
        <form onSubmit={handleSubmitLogin} className="flex flex-col">
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
            className=" mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {" "}
            Connect{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
