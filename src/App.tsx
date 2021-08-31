import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog[]>([]);
  const handleGetDog = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random`
    );
    const jsonBody: Dog = await response.json();
    console.log(jsonBody)
    setDog([...dog,jsonBody]);
  };

  // const handleGetJoke = () => {
  //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  const dogs = dog.map(element => <> 
     <div>
        <details>
          <summary><img src={element.message}></img></summary>
          <p>{element.status}</p>
        </details>
      </div>
  </>)

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
          {dogs}
        <hr />
        <button onClick={handleGetDog}>Get another Dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          Dog profile from an API!
        </p>
        <button onClick={handleGetDog}>Get Dog</button>
      </div>
    );
  }
}

export default App;
