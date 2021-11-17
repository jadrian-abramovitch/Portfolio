import './App.css';
import Header from './components/Header';
import TextBox from './components/TextBox';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" >
          <TextBox />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
