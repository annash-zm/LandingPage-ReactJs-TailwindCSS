//import FirstSection from "./component/FirstSection";
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from './component/About';
import Features from './component/Features';
import FirstSection from './component/FirstSection';
import Huge from './component/Huge';
import Pricing from './component/Pricing';
import Testimonials from './component/Testimonials';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscribe from './component/Subscribe';
import Footer from './component/Footer';


function App() {
  Aos.init ({
    duration : 1800,
    offset : 0
  })
  return (
    <div className="overflow-hidden bg-gray-50">
      <FirstSection />
      <About />
      <Features />
      <Pricing />
      <Huge />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
