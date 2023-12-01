import React from "react";
import { Typography } from "../ui/typography";
import { VscBellDot } from "react-icons/vsc";
import { FaQuestionCircle } from "react-icons/fa";
import {IconType} from "react-icons";
import {useStore} from "@/Store/store";


interface Props {
  title: string;
  subtitle?: string;
  brundcrumbs?: string;
  icons1: IconType;
  icons2: IconType;
  icons3: IconType;
  color?: string;
  url?: string;
  hideBrundcrumbs?: boolean;
}
export default function HeaderItems(props: Props) {
   const handleClick = ()=> {
console.log("test")

  }

  const {isOpen,setIsOpen} = useStore<any>((state)=>state)
  return(
  <nav className="border-b py-4 px-10 flex items-center justify-between">
    <div className=" ">

      <div onClick={setIsOpen}  className="flex items-center gap-5">
        <props.icons1 className="justify-start" size={20} />
        <div className="">
          <Typography className="font-bold" variant="h5">
            {props.title}
          </Typography>
          {
            props.hideBrundcrumbs && <Typography variant="small">{props.subtitle}</Typography>
          }
        </div>
      </div>

      {

        !props.hideBrundcrumbs &&  <nav className="flex pt-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                    href={props.url ?? "/"}
                    className="inline-flex items-cente_r text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white"
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
                      href={props.url ?? "/"}
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
      }
    </div>

    <div className="flex gap-2 ">
      <props.icons2 color="blue" size={20} />
      <props.icons3 size={20} />
    </div>
  </nav>

)
}
