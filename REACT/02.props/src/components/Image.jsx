import "./Image.css";

const Image = ({ source, title }) => {
  return <img src={source} alt={title} />;
};

export default Image;
