import React from 'react';

const Academics = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Academics</h1>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Curriculum</h2>
      <p style={styles.paragraph}>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</p>
      <p style={styles.paragraph}>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
      <p style={styles.paragraph}>Senior Secondary (Grades 11-12):</p>
      <ul style={styles.list}>
        <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
        <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
      </ul>
    </div>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Teaching Methodologies</h2>
      <p style={styles.paragraph}>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
    </div>
    
    <div style={styles.section}>
      <h2 style={styles.subheading}>Educational Resources</h2>
      <p style={styles.paragraph}>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
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

export default Academics;

