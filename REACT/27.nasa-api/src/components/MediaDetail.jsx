import Dialog from "./Dialog";

const MediaDetail = ({ item }) => {
  return (
    <div>
      <figure>
        <figcaption>{item.data[0].title}</figcaption>
        <img src={item.links[0].href} alt={item.data[0].title} />
      </figure>
      <button onClick={(ev) => (ev.target.nextSibling.open = true)}>
        Show More
      </button>
      <Dialog item={item} />
    </div>
  );
};

export default MediaDetail;
