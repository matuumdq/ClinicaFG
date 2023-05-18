import { useParams } from "react-router-dom";
import { cursos } from "../db";

const SingleCourse = () => {
  const { name } = useParams();

  const curso = cursos.find((curso) => curso.name === name);

  return (
    <div>
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
