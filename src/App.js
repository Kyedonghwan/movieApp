import {useState, useEffect} from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>코인</h1>
      {loading ? <strong>loading ...</strong> : null}
      <ul>
        {coins.map((coin)=><li key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</li>)}
      </ul>
    </div>
  )
}