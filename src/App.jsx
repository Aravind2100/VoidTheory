import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from './ScrollToHash';
import CustomCursor from './CustomCursor';

// Dynamic lazy imports for on-demand page chunk loading (boosts initial load performance)
const Home = lazy(() => import('./Home'));
const Work = lazy(() => import('./Work'));
const Services = lazy(() => import('./Services'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

function PageFallback() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00B33C',
      fontFamily: "'Syne', system-ui, sans-serif",
      fontSize: '0.9rem',
      fontWeight: 700,
      letterSpacing: '0.2em'
    }}>
      <span>VOIDTHEORY // LOADING...</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <CustomCursor />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
