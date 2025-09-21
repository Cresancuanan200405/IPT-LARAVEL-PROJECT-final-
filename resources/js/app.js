import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactManager from './pages/ContactManager';

import '../sass/app.scss';


const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contacts/manage';

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacts/manage" element={<ContactManager />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const rootElement = document.getElementById('app');
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}

<div id="app"></div>
