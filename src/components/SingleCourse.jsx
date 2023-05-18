import { useParams } from "react-router-dom";
import { cursos } from "../db";
import { Parallax } from "react-parallax";

const SingleCourse = () => {
  const { name } = useParams();

  const curso = cursos.find((curso) => curso.name === name);

  return (
    <div className="min-h-screen">
        <Parallax
        bgImage={curso.paralaximg}
        bgImageAlt={curso.name}
        strength={200}
        className=""
      >
        <div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center ">
          <h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
            {curso.name}
          </h2>
        </div>
      </Parallax>
      {curso.name}
      <div>
        {curso.modules && curso.modules.map((modu) => (
            <div key={modu.id}>
                <h2 className="font-bold">{modu.name}</h2>
                {modu.modules.split(". ").map((punto, index) => (
                    <p className="" key={index}>
                        {punto}
                    </p>))}
                
            </div>
            ))}
    </div>
    </div>
  );
};

export default SingleCourse;
