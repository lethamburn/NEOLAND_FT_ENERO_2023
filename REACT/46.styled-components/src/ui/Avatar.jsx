import styled from "styled-components";

const AvatarStyled = styled.div`
  width: ${({ size }) =>
    size === "xl"
      ? "300px"
      : size === "lg"
      ? "200px"
      : size === "md"
      ? "100px"
      : "40px"};
  height: ${({ size }) =>
    size === "xl"
      ? "300px"
      : size === "lg"
      ? "200px"
      : size === "md"
      ? "100px"
      : "40px"};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${({ size }) =>
    size === "xl"
      ? "3rem"
      : size === "lg"
      ? "2rem"
      : size === "md"
      ? "1.5rem"
      : "1rem"};
  background-color: cadetblue;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Avatar = ({ image = "", name = "Hola Adios", size }) => {
  const generateInitials = (name) => {
    const splittedName = name.split(" ");
    const initials = splittedName[0][0] + " " + splittedName[1][0];
    return initials;
  };

  if (image) {
    return (
      <AvatarStyled size={size}>
        <img src={image} alt={name} />
      </AvatarStyled>
    );
  } else {
    return (
      <AvatarStyled size={size}>
        <h2>{generateInitials(name)}</h2>
      </AvatarStyled>
    );
  }
};

export default Avatar;
