import { useEffect, useState } from "react";

const Dialog = ({ item }) => {
  const [detail, setDetail] = useState([]);

  const getDetail = async () => {
    const res = await fetch(item.href);
    const data = await res.json();
    setDetail(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  if (item.data[0].media_type === "image") {
    return (
      <dialog>
        <h2>{item.data[0].title}</h2>
        <img src={detail[0]} alt={item.data[0].title} />
        <p>{item.data[0].description}</p>
        <button onClick={(ev) => (ev.target.parentNode.open = false)}>X</button>
      </dialog>
    );
  } else if (item.data[0].media_type === "video") {
    return (
      <dialog>
        <h2>{item.data[0].title}</h2>
        <video
          src={detail[2]}
          width="320"
          height="240"
          controls
          preload="auto"
        ></video>
        <p>{item.data[0].description}</p>
        <button onClick={(ev) => (ev.target.parentNode.open = false)}>X</button>
      </dialog>
    );
  }
};

export default Dialog;
