import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Layout from "./layouts/Layout";
function App() {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}

export default App;
