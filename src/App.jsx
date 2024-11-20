import Companies from './Companies/Companies';
import Residencies from './Companies/Residencies/Residencies';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
