import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
        <li style={styles.navItem}><Link to="/academics" style={styles.navLink}>Academics</Link></li>
        <li style={styles.navItem}><Link to="/admissions" style={styles.navLink}>Admissions</Link></li>
        <li style={styles.navItem}><Link to="/faculty" style={styles.navLink}>Faculty</Link></li>
        <li style={styles.navItem}><Link to="/students" style={styles.navLink}>Students</Link></li>
        <li style={styles.navItem}><Link to="/gallery" style={styles.navLink}>Gallery</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
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

export default Navbar;
