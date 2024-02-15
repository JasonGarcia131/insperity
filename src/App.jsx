import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="lg:w-full lg:flex lg:justify-between">
      <Nav />
      <Main/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
