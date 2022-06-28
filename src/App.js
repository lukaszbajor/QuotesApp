import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [arr, setArr] = useState([]);
  const [quote, setQuote] = useState({});
  const [prevQuote, setPrevQuote] = useState(null);

  const url =
    "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

  const setRandomQuote = () => {
    setQuote(arr[Math.floor(Math.random() * arr.length)]);
  };

  const handleRandom = () => {
    setPrevQuote(quote);
    setRandomQuote();
  };

  const displayPrev = () => {
    setQuote(prevQuote);
  };

  useEffect(() => {
    Axios.get(url).then((response) => {
      setArr(response.data);
    });
  }, []);

  useEffect(() => {
    setRandomQuote();
  }, [arr]);

  return (
    <div className="App">
      <h1 className="header">QuotesApp</h1>
      <h3 className="info">Wylosuj cytat dla siebie!</h3>
      <div className="boxall">
        {quote ? (
          <div className="box">
            <p className="quote">{quote.quote}</p>
            <p className="author">{quote.author}</p>

            <div className="btns">
              <button onClick={handleRandom}>Losuj</button>
              {prevQuote ? (
                <button onClick={displayPrev}>Poprzedni</button>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
