import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../services/characters";
import { Link, useSearchParams } from "react-router";
import { CharacterCard } from "../../components/character-card";

export function CharactersList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const { isLoading, isError, data } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharacters(page || "1"),
  });

  function getNext() {
    const newPage = data?.info?.next?.split("?page=")[1];
    setSearchParams((prevParams) => {
      prevParams.set("page", newPage!);
      return prevParams;
    });
  }

  function getPrev() {
    const newPage = data?.info?.prev?.split("?page=")[1];
    setSearchParams((prevParams) => {
      prevParams.set("page", newPage!);
      return prevParams;
    });
  }

  return (
    <main className="p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Characters
      </h1>
      <section className="grid grid-cols-10 gap-7 mt-10">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong :(</p>}
        {data?.characters.map((character) => (
          <Link to={`${character.id}`} key={character.id}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </section>
      <section className="mt-10 flex items-center justify-center gap-4">
        {data?.info.prev ? <button onClick={getPrev}>Prev</button> : null}
        {data?.info.next ? <button onClick={getNext}>Next</button> : null}
      </section>
    </main>
  );
}
