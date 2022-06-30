/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

/* eslint-disable react/jsx-no-comment-textnodes */
export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-[2rem] tracking-widest">About</p>
          <h3 className="py-4 text-yellow-600 text-[1.5rem]">Who Am I</h3>
          <p className="py-2 text-yellow-400">
            // I am not your normal developer
          </p>
          <p className="py-2">
            After having successfully passed a degree (BTS) in hotel and
            catering, and spending many years of selling a lot of different
            things, I finally took the opportunity to change my destiny and
            began to create something with my own hands. Being interested in
            computer science and everything that surrounds it since I was a
            young girl, it is quite naturally that, in 2022, I went to a web
            development school to learn more about this world, and it seems that
            I like it !
          </p>
          <p className="py-2">
            Fascinated by the way that several pieces of code put together (with
            a certain logic anyway) could generate a beautiful and useful
            graphic interface for so many various domains, going from candy shop
            to a healthy app, I really want to continue on this path and improve
            my skills.
          </p>
          <p className="py-2">
            I started learning JavaScript and it got me excited about the idea
            of making websites interactive, now I am spending my time training
            myself in React/NextJs, building APIs, playing with MySql and
            Firebase and learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#fffb16] underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="px-6">
          <div className="w-full h-auto m-auto shadow-lg shadow-yellow-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img
              className="rounded-xl"
              src="/assets/images/pc.jpg"
              alt="an open pc telling us to (n)ever (s)top learning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
