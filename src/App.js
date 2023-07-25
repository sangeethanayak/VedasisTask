import logo from './logo.svg';
import './App.css';
import VerticalNavbar from './components/verticalnavbar';
import Header from './components/header';
import Hero from './components/hero';
function App() {
  return (
    <div className='App'>
      <Hero />
      <Header />
      <VerticalNavbar />
      
    </div>
  );
}

export default App;
