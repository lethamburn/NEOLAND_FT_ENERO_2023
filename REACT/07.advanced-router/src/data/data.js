const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    role: "Hero",
  },
  {
    id: 2,
    name: "Darth Vader",
    role: "Villain",
  },
  {
    id: 3,
    name: "Leia Organa",
    role: "Hero",
  },
  {
    id: 4,
    name: "Chewbacca",
    role: "Hero",
  },
  {
    id: 5,
    name: "Palpatine",
    role: "Villain",
  },
];

export const getCharacters = () => {
  return characters;
};

export const getCharacter = (id) => {
  return characters.find((character) => character.id.toString() === id);
};
