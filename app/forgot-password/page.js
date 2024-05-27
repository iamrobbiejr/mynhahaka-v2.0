'use client'

import React from 'react';
import {useRouter} from "next/navigation";

function ForgotPassword(props) {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col justify-center bg-white">
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-24 mx-auto lg:py-32">
                    <div className="lg:flex">
                        <div className="lg:w-1/2">
                            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>

                            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Nhaka PAS</h1>

                            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                                Reset Your Password
                            </h1>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mt-0">
                            <form className="w-full lg:max-w-xl">
                                <div className="relative flex items-center">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </span>

                                    <input type="email"
                                           className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                           placeholder="Email address"/>
                                </div>

                                <div className="mt-8 md:flex md:items-center">
                                    <button
                                        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg md:w-1/2 hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
                                        Reset
                                    </button>

                                    <a href="/"
                                       className="inline-block mt-4 text-center text-emerald-500 md:mt-0 md:mx-6 hover:underline dark:text-emerald-400">
                                        Remembered your password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default ForgotPassword;