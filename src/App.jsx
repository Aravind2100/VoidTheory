import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import ScrollToHash from './ScrollToHash';
import CustomCursor from './CustomCursor';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
