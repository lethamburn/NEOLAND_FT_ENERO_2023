import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import "./Home.css";

const Home = () => {
  const APIKEY = "2fe335f082bbb92b86a34c5aba28f15e";
  const [top, setTop] = useState(null);

  const getChart = async () => {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${APIKEY}&format=json`
    );
    const data = await res.json();
    setTop(data.artists.artist);
  };

  useEffect(() => {
    getChart();
  }, []);

  return (
    <main className="nf-section-home">
      {top !== null ? (
        <ol>
          {top.map((t) => (
            <li key={t.name}>
              <a href={t.url} target="_blank">
                {t.name}
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Home;
