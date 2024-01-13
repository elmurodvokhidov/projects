import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  const [quoteElement, setQuoteElement] = useState(null);
  const API_URL = "http://api.quotable.io/random";

  // function getRandomQuote() {
  //   return fetch(API_URL)
  //     .then(res => res.json())
  //     .then(data => data.content)
  // };

  useEffect(() => {
    // const renderNewQuote = async () => {
    //   const quote = await getRandomQuote();
    //   console.log(quote);
    // };

    fetch(API_URL)
      .then(res => res.json())
      .then(data => setQuote(data.content))

    // renderNewQuote()
  }, [API_URL])


  return (
    <div className="App">
      <div className="timer">0</div>
      <div className="container">
        <div className="quote-display" id="quoteDisplay">{quote}</div>
        <textarea id="quoteInput" className="quote-input" autoFocus={true}>{quoteElement}</textarea>
      </div>
    </div>
  );
}

export default App;
