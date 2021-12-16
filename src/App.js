import './App.css';
import Header from './components/Header';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Blog from './views/Blog';
import About from './views/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" >
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </div>
    </Router>
  );
}

export default App;
