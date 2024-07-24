import React from 'react';

const Admissions = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Admissions</h1>
    
    <div style={styles.section}>
      <p style={styles.paragraph}>
        <strong>Process:</strong> Admission forms are available for download. Submit the completed form along with required documents at the school office.
      </p>
      <p style={styles.paragraph}>
        <strong>Criteria:</strong> Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
      </p>
    </div>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Important Dates</h2>
      <ul style={styles.list}>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
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

export default Admissions;
