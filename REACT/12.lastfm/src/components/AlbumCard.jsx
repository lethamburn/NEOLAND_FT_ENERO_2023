import "./AlbumCard.css";

const AlbumCard = ({ al }) => {
  return (
    <>
      {al.image[3]["#text"] && (
        <figure className="nf-album-card">
          <img src={al.image[3]["#text"]} alt={al.name} />{" "}
        </figure>
      )}
    </>
  );
};

export default AlbumCard;
