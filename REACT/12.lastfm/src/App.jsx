import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
