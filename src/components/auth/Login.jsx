import React, { useEffect, useRef } from 'react'
import { useAuth } from "../../utils/auth.jsx";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user, loginUser } = useAuth();
  const loginForm = useRef(null)
  const Navigate = useNavigate()

  if(user){ 
    return Navigate('/display')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    const userInfo = {email, password}

    loginUser(userInfo)
  }
  return (
    <div>
      <div>
        <section class="bg-transparent">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 bg-white bg-opacity-20">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Login to Your account
                </h1>
                <form
                  class="space-y-4 md:space-y-6"
                  ref={loginForm}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  
                  <button
                    type="submit"
                    class="w-full text-white border border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    SignIn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
