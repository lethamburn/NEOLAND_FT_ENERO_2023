import "./Image.css";

const Image = ({ source, description }) => {
  return <img src={source} alt={description} />;
};

export default Image;
