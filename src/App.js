
import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Services />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
