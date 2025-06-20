import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WorkDetails from './WorkDetails';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <>
      <head>
        {/* Default meta tags that apply to all pages */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="voidTheory" />
        <meta name="robots" content="index, follow" />
        {/* Default JSON-LD for the organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "voidTheory",
            "url": "https://voidtheory.online",
            "logo": "https://voidtheory.online/src/assets/logo.png",
            "sameAs": [
              "https://twitter.com/voidtheory",
              "https://linkedin.com/company/voidtheory",
              "https://github.com/voidtheory"
            ]
          })}
        </script>
      </head>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<WorkDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
