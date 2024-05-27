'use client'

import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
      <>
        <div className="bg-white dark:bg-gray-900">
          <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3"
                 style={{background: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"}}>
              <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">Nhaka Policy Admin</h2>

                  <p className="max-w-xl mt-3 text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                    molestiae
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
              <div className="flex-1">
                <div className="text-center">
                  <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>
                  </div>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                </div>

                <div className="mt-8">
                  <form>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email
                        Address</label>
                      <input type="email" name="email" id="email" placeholder="example@example.com"
                             className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <a href="/forgot-password"
                           className="text-sm text-gray-400 focus:text-emerald-500 hover:text-emerald-500 hover:underline">Forgot
                          password?</a>
                      </div>

                      <input type="password" name="password" id="password" placeholder="Your Password"
                             className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mt-6">
                      <a href="/dashboard"
                         className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:bg-emerald-400 focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
                        Sign in
                      </a>

                    </div>
                    <p className="mt-6 py-6 text-sm flex flex-col items-center justify-center text-gray-400">v.2.0.1</p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
