import { Character } from "../services/characters";

type CharacterCardProps = {
  character: Character;
  isDetailed?: boolean;
};

export function CharacterCard({
  character,
  isDetailed = false,
}: CharacterCardProps) {
  return (
    <div className="border p-2 rounded-lg flex flex-col gap-2">
      <img src={character.image} alt={character.name} />
      <p className="font-medium truncate">{character.name}</p>
      {isDetailed ? (
        <div>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      ) : null}
    </div>
  );
}
