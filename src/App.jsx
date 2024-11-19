import Companies from './Companies/Companies';
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
    </div>
  );
}

export default App;
