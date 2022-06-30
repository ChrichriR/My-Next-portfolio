/* eslint-disable react/no-unescaped-entities */

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            Let's start creating something awesome together !
          </p>
          <h1 className="py-4 text-yellow-600">
            Hello, I'm <span className="text-[#fffb16]"> Christelle </span>
          </h1>
          <h2 className="py-2">A Full-Stack Web Developer Junior</h2>
          <p className="py-4 max-w-[70%] m-auto">
            I enjoy building responsive front-end web applications and websites
            while deepening my knowledge of back-end technologies.
          </p>
          <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/christelle-rouz%C3%A9/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-yellow-600 mt-6 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
            </a>
            <a
              href="https://github.com/ChrichriR"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-yellow-600 mt-6 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
