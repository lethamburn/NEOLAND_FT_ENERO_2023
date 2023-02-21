import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import App from "./App";

/**
 * @vitest-environment jsdom
 */

//Le indicamos en la descripción el nombre de la prueba completa
describe("App Component", () => {
  //1º test: deberia renderizar los elementos correctos
  test("should render the correct elements", () => {
    //Renderizamos el componente "real" para comprobarlo
    render(<App />);
    //Se espera que en pantalla aparezca un elemento con el placeholder "Escribe tu nombre!"
    expect(
      screen.getByPlaceholderText("Escribe tu nombre!")
    ).toBeInTheDocument();
    //Se espera también que pueda recuperar del documento un elemento que contenga el texto "Hello,"
    expect(screen.getByText("Hello,")).toBeInTheDocument();
  });
  //2º test: deberia renderizar el nombre correcto cuando el input esté completado
  test("should render the correct name when input is filled", () => {
    //Renderizamos el componente App
    render(<App />);
    //Recuperamos el elemento con el test id: inputName
    const inputElement = screen.getByTestId("inputName");
    //Vamos a escribir en el input la palabra "Antonio"
    userEvent.type(inputElement, "Antonio");
    //Le decimos al test que se espere para comprobar que en el documento pueda recuperar el string, una vez escrito, "Hello, Antonio"
    waitFor(() =>
      expect(screen.queryByText("Hello, Antonio")).toBeInTheDocument()
    );
  });
  //3º test: vamos a comprobar que la imagen tiene el src y el alt que nos han pedido
  test("should render the correct image with the proper alt text", () => {
    render(<App />);

    //Esperamos que en la pantalla haya un elemento img con el atributo x
    expect(screen.getByTestId("cat-img")).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80"
    );
    //Esperamos que en la pantalla haya un elemento img con el atributo src x
    expect(screen.getByTestId("cat-img")).toHaveAttribute(
      "alt",
      "Gato enfadado"
    );
  });
});
