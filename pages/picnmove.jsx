/* eslint-disable react/no-unescaped-entities */
import picnmoveImg from "../public/assets/projects/picnmove.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Picnmove() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={picnmoveImg}
          alt="screen of my memory game "
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Pic'N'Move</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[2rem]">Project</p>
          <h4 className="text-[1.5rem]">Overview</h4>
          <p>
            Pic'N'Move is my second assignment, done in 6 weeks with 4 of my
            colleagues.
            <br />
            We could create whatever we wanted, but we needed to use, at least,
            one API. We decided to push ourselves into an ambitious project, and
            use 3 differents APIs. We designed a website app for people living
            in the city (Lyon in our case) and wanting to do running while
            keeping some memories with some random pictures taken at several
            points of the predefined course they have choosen on the app. They
            could collect this pictures once the running course was over.
            <br />
            This project was our first step into the agile method (scrum for
            this project), the implementation of the Back-End with Express and
            the application of a great library, React!
          </p>
          <a
            href="https://pic-n-move.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/ComicScrip/lyon-react-mars22-p2g4"
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
                React
              </p>
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Leaflet
              </p>
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flickr
              </p>
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OpenWeatherMap
              </p>
              <p className="text-yellow-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
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
