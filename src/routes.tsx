import { Route, Routes } from "react-router";
import { Home } from "./routes/home";
import { CharactersList } from "./routes/characters/characters-list";
import { CharacterDetail } from "./routes/characters/character-detail";

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/characters">
        <Route index element={<CharactersList />} />
        <Route path=":id" element={<CharacterDetail />} />
      </Route>
    </Routes>
  );
}
