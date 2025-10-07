import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import WhyAvenza from './components/WhyAvenza';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Careers from './components/Careers';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Careers />    {/* Make sure Careers is here */}
      <Solutions />
      <WhyAvenza />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
