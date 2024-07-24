import React from 'react';

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Welcome to Springdale Public School</h1>
    <p style={styles.subheading}>Where we nurture young minds for a brighter future.</p>
    <div style={styles.carousel}>
      <div style={styles.carouselItem}>"Annual Sports Day - Celebrating Excellence in Sports"</div>
      <div style={styles.carouselItem}>"Science Exhibition - Showcasing Student Innovations"</div>
      <div style={styles.carouselItem}>"Cultural Fest - Embracing Diversity and Creativity"</div>
    </div>
  </div>
);

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px',
    backgroundColor: '#f4f4f9',
  },
  heading: {
    fontSize: '3.5em',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  subheading: {
    fontSize: '1.6em',
    color: '#7f8c8d',
    marginBottom: '40px',
    fontWeight: '300',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '20px',
  },
  carouselItem: {
    flex: '1 1 250px',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    fontSize: '1.25em',
    color: '#34495e',
    textAlign: 'center',
    lineHeight: '1.4',
  },
};

export default HomePage;
