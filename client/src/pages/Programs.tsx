import { useEffect, useState } from "react";
interface ProgramInterface {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

type ProgramArray = ProgramInterface[];

function Programs() {
  const [programs, setPrograms] = useState<ProgramArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <p>{program.synopsis}</p>
          <img src={program.poster} alt={program.title} />
        </div>
      ))}
    </>
  );
}

export default Programs;
