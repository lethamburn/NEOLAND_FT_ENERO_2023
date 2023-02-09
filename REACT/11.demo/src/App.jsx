import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default App;
