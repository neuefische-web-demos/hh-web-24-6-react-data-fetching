import { useState, useEffect } from "react";

export default function Joke() {
  // const joke = "Some funny joke";
  const [joke, setJoke] = useState("");
  const [id, setId] = useState(0);
  // takes 2 arguments.
  // 1 call back function
  // 2 depedency array
  useEffect(() => {
    console.log("I am running in the useEffect");
    async function getJoke() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${id}`
      );
      const data = await response.json();
      console.log("data:", data);
      setJoke(data);
    }

    getJoke();
  }, [id]);

  function handleClick() {
    console.log("clicked the button");
    setId(joke.nextId);
  }

  if (!joke) {
    return null;
  }

  console.log("about to render", joke);

  return (
    <>
      <h1>{joke.joke}</h1>
      <h2>id: {id}</h2>
      <button onClick={handleClick} type="button">
        Next Joke
      </button>
    </>
  );
}
