import './App.css';
import Header from './components/Header';
import TextBox from './components/TextBox';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Blog from './views/Blog';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" >
          <TextBox color={'#CBCDCB'}/>
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
