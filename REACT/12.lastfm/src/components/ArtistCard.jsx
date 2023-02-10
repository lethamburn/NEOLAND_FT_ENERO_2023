import "./ArtistCard.css";

const ArtistCard = ({ artist }) => {
  return (
    <article className="nf-artistcard">
      <h2>{artist.name}</h2>
      <h3>{artist.ontour === "1" ? "On Tour" : "Not on tour"}</h3>
      <ul>
        {artist.tags.tag.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
      <h3>Similar artists:</h3>
      <ul>
        {artist.similar.artist.map((art) => (
          <li key={art.name}>{art.name}</li>
        ))}
      </ul>
      <p>{artist.bio.summary.split(" <a")[0]}</p>{" "}
      <a href={artist.url} target="_blank">
        View More +
      </a>
    </article>
  );
};

export default ArtistCard;
