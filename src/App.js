import "./App.css";
import Header from "./components/Header";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Blog from "./views/Blog";
import About from "./views/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main className="content">
        <Header />
        <div className="page-wrapper">
          <div className="page">
            <About />
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page">
            <Projects />
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page">
            <Blog />
            <Contact />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
