import React from 'react';

const Faculty = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Faculty</h1>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <strong>John Doe</strong>: Principal, M.Ed, 20 years of experience in educational administration.
      </li>
      <li style={styles.listItem}>
        <strong>Jane Smith</strong>: Vice Principal, M.Sc. in Physics, 15 years of teaching experience.
      </li>
      <li style={styles.listItem}>
        <strong>Emily Johnson</strong>: English Teacher, M.A. in English, 10 years of teaching experience.
      </li>
      <li style={styles.listItem}>
        <strong>Michael Brown</strong>: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.
      </li>
      <li style={styles.listItem}>
        <strong>Sophia Davis</strong>: Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.
      </li>
      <li style={styles.listItem}>
        <strong>David Wilson</strong>: Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
      </li>
    </ul>
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
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
};

export default Faculty;
