import React from "react";
import { Typography } from "../ui/typography";
import { VscBellDot } from "react-icons/vsc";
import { FaQuestionCircle } from "react-icons/fa";

export default function HeaderItems() {
  return <div>Developpement des IHM</div>;
}
<nav className="border-b py-4  flex items-center justify-between">
  <div className="pl-10">
    <Typography className="font-bold" variant="h5">
      Détail contrat
    </Typography>

    <nav className="flex pt-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-500  md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Clients
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-500  md:ml-2 dark:text-gray-400">
              Détail client
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ml-1 text-sm font-medium text-[#D89D37]  md:ml-2 dark:text-gray-400">
              Détail contrat
            </span>
          </div>
        </li>
      </ol>
    </nav>
  </div>

  <div className="flex gap-2 pr-40">
    <VscBellDot color="blue" size={20} />
    <FaQuestionCircle size={20} />
  </div>
</nav>;
