import memoryImg from "../public/assets/projects/memory.png";
import tetrisImg from "../public/assets/projects/tetris.png";
import picnmoveImg from "../public/assets/projects/picnmove.png";
import ProjectItem from "./ProjectItem";

/* eslint-disable react/no-unescaped-entities */
export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-[2rem] tracking-widest">
          Projects
        </p>
        <h3 className="py-4 text-yellow-600 text-[1.5rem]">What I've Built</h3>
        <div className="grid md:grid-cols-2 gap-8 px-6">
          <ProjectItem
            title="Projet Zero"
            backgroundImg={tetrisImg}
            language="Vanilla JS"
            projectUrl="/tetris"
          />
          <ProjectItem
            title="Pictures and run app"
            backgroundImg={picnmoveImg}
            language="React"
            projectUrl="/picnmove"
          />
          <ProjectItem
            title="Memory Game"
            backgroundImg={memoryImg}
            language="React"
            projectUrl="/memory"
          />
        </div>
      </div>
    </div>
  );
}
