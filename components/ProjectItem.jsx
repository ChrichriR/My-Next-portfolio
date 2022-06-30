import Link from "next/link";
import Image from "next/image";

export default function ProjectItem({ title, backgroundImg, projectUrl, language }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-yellow-600 rounded-xl p-4 group hover:bg-gradient-to-r from-[#FFD700] to-[#f7f330]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="screenshot of my memory game"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h4 className="text-2xl text-black tracking-wider text-center">
          {title}
        </h4>
        <p className="pb-4 pt-2 text-black text-center">{language}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-black font-bold text-lg cursor-pointer text-yellow-600">
            More Infos
          </p>
        </Link>
      </div>
    </div>
  );
}
