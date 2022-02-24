import './App.css';
import Header from './components/Header';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Blog from './views/Blog';
import About from './views/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <main className="content">
        <Header />
        <Route exact path="/" >
          <About />
          <Projects />
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
