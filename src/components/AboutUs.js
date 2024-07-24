import React from 'react';

const AboutUs = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>About Us</h1>
    <p style={styles.paragraph}>
      Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
    </p>
    <h2 style={styles.subHeading}>Vision</h2>
    <p style={styles.paragraph}>
      To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
    </p>
    <h2 style={styles.subHeading}>Mission</h2>
    <p style={styles.paragraph}>
      To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
    </p>
    <h2 style={styles.subHeading}>Principal's Message</h2>
    <p style={styles.paragraph}>
      At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
    </p>
    <h2 style={styles.subHeading}>Infrastructure and Facilities</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>State-of-the-art science and computer labs</li>
      <li style={styles.listItem}>Spacious and well-equipped classrooms</li>
      <li style={styles.listItem}>Library with a vast collection of books and digital resources</li>
      <li style={styles.listItem}>Sports facilities including a playground, gymnasium, and swimming pool</li>
    </ul>
  </div>
);

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
    color: '#333',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: '30px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.1em',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginTop: '10px',
  },
  listItem: {
    fontSize: '1.1em',
    marginBottom: '10px',
  },
};

export default AboutUs;
