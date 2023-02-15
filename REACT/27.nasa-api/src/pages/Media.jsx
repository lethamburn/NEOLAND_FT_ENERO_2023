import "./Media.css";
import { useContext, useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Spinner from "../components/Spinner";
import { NasaContext } from "../context/nasaContext";
import GridLayout from "../layout/GridLayout";
import MediaDetail from "../components/MediaDetail";

const Media = () => {
  const { items, setItems } = useContext(NasaContext);
  const [keyword, setKeyword] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [keywordValue] = useDebounce(keyword, 1000);
  const [loaded, setLoaded] = useState(false);

  const getItems = async () => {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${keyword}&media_type=${mediaType}`
    );
    const data = await res.json();
    setItems(data.collection.items);
    setLoaded(true);
    console.log("PETICION");
  };

  useEffect(() => {
    getItems();
    console.log("USEEFFECT");
  }, [keywordValue, mediaType]);

  return (
    <main className="nasa-page-media">
      <button onClick={() => setMediaType("image")}>Image</button>
      <button onClick={() => setMediaType("video")}>Video</button>
      <input
        type="text"
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
      />
      <GridLayout>
        {loaded ? (
          items.map(
            (item) =>
              item.links && (
                <MediaDetail key={item.data[0].nasa_id} item={item} />
              )
          )
        ) : (
          <Spinner />
        )}
      </GridLayout>
    </main>
  );
};

export default Media;
