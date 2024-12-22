import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "../../components/character-card";
import { useNavigate, useParams } from "react-router";
import { getCharacterById } from "../../services/characters";

export function CharacterDetail() {
  const params = useParams<{ id: string }>();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["characters", params.id],
    queryFn: () => getCharacterById(params.id!),
  });

  const navigate = useNavigate();

  return (
    <main className="h-dvh flex items-center flex-col gap-4 justify-center">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      {data && <CharacterCard isDetailed character={data} />}
      <button onClick={() => navigate(-1)}>Go back</button>
    </main>
  );
}
