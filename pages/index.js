import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import FanSignup from "../components/FanSignup";
import TalentSignup from "../components/TalentSignup";

import { useState, useEffect, useRef } from "react";
export default function Home() {
  const ref = useRef("");
  const [open, setOpen] = useState(false);
  // function chnageHandler() {
  console.log(open);
  //   setOpen(!open);
  // }

  return (
    <div className=" min-h-screen flex justify-center items-center bg-black">
      <div className="bg-gray py-8 w-2/3 rounded-lg px-64 sm:px-1 md:px-16 lg:px-44">
        <div className=" flex h-12  bg-black  rounded-full ">
          <button
            className={
              open === false
                ? ` bg-green rounded-full text-black w-full text-center`
                : `text-white rounded-full  focus:text-black w-full text-center`
            }
            onClick={() => setOpen(false)}
          >
            Fan Signup
          </button>

          <button
            className={
              open === true
                ? ` bg-green rounded-full  text-black w-full text-center`
                : `text-white rounded-full  focus:text-black w-full text-center`
            }
            onClick={() => setOpen(true)}
          >
            Telent Signup
          </button>
        </div>

        <>{!open && <FanSignup />}</>
        <>{open && <TalentSignup />}</>
      </div>
    </div>
  );
}
