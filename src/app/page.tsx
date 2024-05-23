import { getServerSession } from "next-auth";
import Link from "next/link";
import { NextAuthOptions } from "./api/auth/[...nextauth]/config";

export default async function Home() {
  const session = await getServerSession(NextAuthOptions);

  return (
    <main className="w-full h-full ">
      <section className="bg-gradient-to-br from-blue-500 to-pink-500 py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">
            Welcome to our <br />
            Store
          </h1>

          <p className="text-white text-lg md:text-2xl mb-12 mt-12">
            Experience the magic of colors with our unique products and
            services.
          </p>
          <Link href="/products">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </Link>
          {session?.user ? (
            <div className="mt-20">
              <br />
              <Link href="/products/manage" className="mb-4">
                <span className=" text-blue-300 font-bold text-xl underline">
                  Manage your products
                </span>
              </Link>
            </div>
          ) : (
            <div className="mt-20">
              <p className="text-white  md:text-2xl">
                Have you a count , let connect
              </p>
              <br />
              <Link href="/auth/login" className="mb-4">
                <span className=" text-blue-300 font-bold text-xl underline">
                  Login
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
