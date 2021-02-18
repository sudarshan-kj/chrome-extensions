import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./assets/word-set-magoosh.json";

const DATA_SIZE = data.length;

function randomNumberGenerator(max) {
  //return 940;
  return Math.floor(Math.random() * max);
}

function App() {
  const [randomNumber, setRandomNumber] = useState(
    randomNumberGenerator(DATA_SIZE)
  );

  const handleNewWordClick = () => {
    setRandomNumber(randomNumberGenerator(DATA_SIZE));
  };

  React.useEffect(() => {
    function handleSpaceKey(e) {
      if (e.key === " ") {
        setRandomNumber(randomNumberGenerator(DATA_SIZE));
      }
    }
    window.addEventListener("keypress", handleSpaceKey);
    return () => window.removeEventListener("keypress", handleSpaceKey);
  }, []);
  console.log(randomNumber);

  return (
    <div className="container">
      <div className="app">
        <div className="card">
          <p className="heading">New Word Daily</p>
          {data[randomNumber]["back"].map((ele) => (
            <div>
              {ele.type === "word" && <h1 className="word">{ele.content}</h1>}
              {ele.type === "text" && (
                <p
                  dangerouslySetInnerHTML={{ __html: ele.content }}
                  className="wordDefinition"
                />
              )}
              {ele.type === "example" && (
                <p
                  dangerouslySetInnerHTML={{ __html: ele.content }}
                  className="wordExample"
                />
              )}
            </div>
          ))}
          <p className="date">
            18<sup>th</sup> February, 2021
          </p>
        </div>
        <button className="newWordButton" onClick={handleNewWordClick}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
