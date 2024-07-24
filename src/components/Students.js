import React from 'react';

const Students = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Life at Springdale</h1>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Extracurricular Activities</h2>
      <p style={styles.paragraph}>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
    </div>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Clubs and Societies</h2>
      <p style={styles.paragraph}>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
    </div>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Achievements</h2>
      <ul style={styles.list}>
        <li>John Smith - National Level Math Olympiad Winner</li>
        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
        <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
      </ul>
    </div>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Student Council</h2>
      <p style={styles.paragraph}><strong>President:</strong> Amy Parker, Grade 12</p>
      <p style={styles.paragraph}><strong>Vice President:</strong> Rajiv Mehta, Grade 11</p>
      <p style={styles.paragraph}><strong>Secretary:</strong> Lisa Wong, Grade 10</p>
    </div>
  </div>
);

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '2rem',
    color: '#333',
    borderBottom: '2px solid #4CAF50',
    paddingBottom: '10px',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  list: {
    fontSize: '1.2rem',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
  },
};

export default Students;
