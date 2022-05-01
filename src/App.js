import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  const API = "https://api.kanye.rest/";
  const Solution = () => {
    const [quote, setQuote] = useState("initial state of quote");

    const getData = () =>
        fetch(API)
            .then((result) => result.json())
            .then((json) => json.quote)
            .then((quote) => setQuote(quote));
            useEffect(() => {
              const timer = setInterval(getData, 6000); 
              return () => clearInterval(timer) 
          }, []);
      
          return <h1>{quote}</h1>;
      };
  return (
    <div className="App">
         <Solution />
    </div>
  );
}

export default App;
