import { useLoaderData } from "react-router";
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
  // (b1)this is what I initially did:
  //     const [programs, setPrograms] = useState<ProgramArray>([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3310/api/programs")
  //       .then((response) => response.json())
  //       .then((data) => setPrograms(data));
  //   }, []);

  // (b3)this is what I did after correction

  const programs: ProgramArray = useLoaderData();

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
