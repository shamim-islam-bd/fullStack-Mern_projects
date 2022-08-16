import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../assets/images/icons/Home.svg";
import { ProfileInfo } from "../User/Account/ProfileInfo";
import { Payment } from "../User/Payments/Payment";
import { DashHome } from "./DashHome";

export const DashMain = () => {
  return (
    <div className="container py-5">
      {/* BreadCumbs */}
      <div className="flex items-center py-5">
        <span>
          <img className="w-5" src={Home} alt="" srcSet="" />
        </span>
        <span>
          <i className="ml-3 font-md fas fa-light fa-angle-right text-primary"></i>
        </span>
        <span className="ml-3">Account</span>
      </div>

      <hr />
      <br />

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="">
          <div className="shrink-0 flex items-center border p-2">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
            <div className="pl-2">
              <h3 className="pl-2">Hello,</h3>
              <strong className="pl-2">Shamim islam</strong>
            </div>
          </div>

          <div className="flex flex-col justify-between h-screen bg-white border-r">
            <div className="px-4 py-5">
              {/* <span class="block w-32 h-10 bg-gray-200 rounded-lg"></span> */}

              <nav className="flex flex-col mt-6 space-y-1">
                <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <Link to="/payments" className="ml-3 text-sm font-medium">
                    {" "}
                    General{" "}
                  </Link>
                </a>

                <details className="group">
                  <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <Link to="/myprofile" className="ml-3 text-sm font-medium">
                      {" "}
                      My Profile{" "}
                    </Link>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav className="mt-1.5 ml-8 flex flex-col">
                    <Link
                      to="/profileinfo"
                      className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <Link to="me" className="ml-3 text-sm font-medium">
                        {" "}
                        Profile Information{" "}
                      </Link>
                    </Link>

                    <Link
                      to="/manageAddress"
                      className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Manage Address{" "}
                      </span>
                    </Link>
                    <Link
                      to="/changepassword"
                      className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Change Password{" "}
                      </span>
                    </Link>
                  </nav>
                </details>

                <details className="group">
                  <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <Link
                      to="/orderHistory"
                      className="ml-3 text-sm font-medium"
                    >
                      {" "}
                      My Order History{" "}
                    </Link>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav class="mt-1.5 ml-8 flex flex-col">
                    <Link
                      to="/OrderInfo"
                      class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <Link to="me" class="ml-3 text-sm font-medium">
                        {" "}
                        Orders Information{" "}
                      </Link>
                    </Link>

                    <Link
                      to="/orderReturns"
                      class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <span class="ml-3 text-sm font-medium"> My Returns </span>
                    </Link>
                  </nav>
                </details>
                <Link
                  to="/payments"
                  class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="ml-3 text-sm font-medium">
                    {" "}
                    Payments Methords{" "}
                  </span>
                </Link>
                <details class="group">
                  <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <Link to="/account" class="ml-3 text-sm font-medium">
                      {" "}
                      Account{" "}
                    </Link>

                    <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav class="mt-1.5 ml-8 flex flex-col">
                    <a
                      href=""
                      class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                      </svg>

                      <Link to="/details" class="ml-3 text-sm font-medium">
                        {" "}
                        Details{" "}
                      </Link>
                    </a>

                    <form action="/logout">
                      <button
                        type="submit"
                        className="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>

                        <Link to="/logout" className="ml-3 text-sm font-medium">
                          {" "}
                          Logout{" "}
                        </Link>
                      </button>
                    </form>
                  </nav>
                </details>
              </nav>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <a
                href=""
                className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
              >
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://www.hyperui.dev/photos/man-4.jpeg"
                  alt="Simon Lewis"
                />

                <div className="ml-1.5">
                  <p className="text-xs">
                    <strong className="block font-medium">Simon Lewis</strong>

                    <span> simonlewis@fakemail.com </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center">My name is Shamim islam</h1>
        </div>
      </div>

      <Routes>
        <Route index path="/" element={<DashHome />} />
        <Route path="me" element={<ProfileInfo />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </div>
  );
};
