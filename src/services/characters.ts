export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: Location;
  location: Location;
};

export type Location = {
  name: string;
  url: string;
};

type GetCharactersResponse = {
  characters: Character[];
  info: {
    prev: string | null;
    next: string | null;
  };
};

export async function getCharacters(
  page?: string,
): Promise<GetCharactersResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page || "1"}`,
  );
  const data = await response.json();
  return {
    characters: data.results,
    info: data.info,
  };
}

export async function getCharacterById(id: string): Promise<Character> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const data = await response.json();
  return data;
}
