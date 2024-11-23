import Companies from './Companies/Companies';
import Residencies from './Companies/Residencies/Residencies';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Value from './components/Value/Value';
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
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default App;
