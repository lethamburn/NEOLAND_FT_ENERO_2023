import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NasaContextProvider } from "./context/nasaContext";
import BaseLayout from "./layout/BaseLayout";

const App = () => {
  return (
    <BaseLayout>
      <Header />
      <Outlet />
      <Footer />
    </BaseLayout>
  );
};

export default App;
