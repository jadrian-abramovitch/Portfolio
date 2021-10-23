import './App.css';
import Header from './components/Header';
import NavButton from './components/NavButton';

function App() {
  return (
    <div className="App">
      <Header />
      <NavButton name={'HOME'} color={'blue'}/>
        <p>
          Hi Im Jadrian!
        </p>
    </div>
  );
}

export default App;
