const SPACE_PIXELS_VALUE = 8;

//FUNCION ESPACIADORA
export const spacing = (spaceV, spaceH) =>
  spaceH !== null && spaceH !== undefined
    ? `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`
    : `${spaceV * SPACE_PIXELS_VALUE}px`;

//FUNCION DETECTORA DE OBJETOS PLANOS
const isPlainObject = (item) =>
  item !== null && typeof item === "object" && item.constructor === Object;

//FUNCION CREADORA DE TEMAS
export const createTheme = (baseTheme, theme) => {
  const output = { ...baseTheme };
  if (isPlainObject(baseTheme) && isPlainObject(theme)) {
    Object.keys(theme).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (
        isPlainObject(theme[key]) &&
        key in baseTheme &&
        isPlainObject(baseTheme[key])
      ) {
        [key] = createTheme(baseTheme[key], theme[key]);
      } else {
        [key] = theme[key];
      }
    });
  }
  return output;
};
