import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';

const App = () => (
  <Router>
    <div style={styles.appContainer}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="/about-us" style={styles.navLink}>About Us</a></li>
          <li style={styles.navItem}><a href="/academics" style={styles.navLink}>Academics</a></li>
          <li style={styles.navItem}><a href="/admissions" style={styles.navLink}>Admissions</a></li>
          <li style={styles.navItem}><a href="/faculty" style={styles.navLink}>Faculty</a></li>
          <li style={styles.navItem}><a href="/students" style={styles.navLink}>Students</a></li>
          <li style={styles.navItem}><a href="/gallery" style={styles.navLink}>Gallery</a></li>
          <li style={styles.navItem}><a href="/contact-us" style={styles.navLink}>Contact Us</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  </Router>
);

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#4CAF50',
  },
};

export default App;
