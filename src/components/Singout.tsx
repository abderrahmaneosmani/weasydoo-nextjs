"use client";

import { signOut } from "next-auth/react";
import React from "react";

function SignOutComponent() {
  return (
    <div>
      <button
        className="btn text bg-red-300 text-white mx-2 py-2 border-spacing-0 rounded-md px-2 py-2 "
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}

export default SignOutComponent;
