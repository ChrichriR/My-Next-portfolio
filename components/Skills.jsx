import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-[2rem] tracking-widest uppercase">
          Skills
        </p>
        <h3 className="py-4 text-yellow-600 text-[1.5rem]">What I Can Do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  alt="html logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>HTML</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  alt="CSS logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>CSS</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  alt="JS logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/github.png"
                  alt="github logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Github</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  alt="react logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>React</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  alt="nextjs logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>NextJs</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/mysql.png"
                  alt="mysql logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>MySql</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/firebase.png"
                  alt="firebase logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Firebase</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/node.png"
                  alt="node logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Node</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  alt="tailwind logo"
                  width="64px"
                  height="60px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Tailwind</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
