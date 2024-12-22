import { Link } from "react-router";

export function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-8 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to my Rick and Morty app
      </h1>
      <img
        src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=620&quality=85&auto=format&fit=max&s=b8e6130f15f574d9dcfce973d227361c"
        alt="Rick and Morty"
      />
      <nav>
        <Link to="/characters">Characters</Link>
      </nav>
    </main>
  );
}
