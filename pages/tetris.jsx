import tetrisImg from "../public/assets/projects/tetris.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Tetris() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tetrisImg}
          alt="screen of our tetris game"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Projet Zero</h2>
          <h3>Vanilla JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[2rem]">Project</p>
          <h4 className="text-[1.5rem]">Overview</h4>
          <p>
            This is my first school project, done in 2 weeks with 3 of my
            colleagues.
            <br />
            We had to create a static website in HTML, CSS and vanilla JS.
            <br />
            We chose to create a Tetris-like game, and even if it became obvious
            after 4-5 days that it was a big part for us at this time, we got a
            lot of fun while encoding it. <br /> This is also the begining of my
            love story with Github.
          </p>
          <a
            href="https://wcs-project1-tetris-zero.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/PiDartevelle/ZeroAgain"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-yellow-600 rounded-xl">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vanilla JS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
