import React from 'react';

const ContactUs = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Contact Us</h1>
    <div style={styles.info}>
      <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      <p><strong>Email:</strong> info@springdale.edu</p>
    </div>
    <form style={styles.form}>
      <label style={styles.label}>Name</label>
      <input type="text" name="name" style={styles.input}/>
      <label style={styles.label}>Email</label>
      <input type="email" name="email" style={styles.input}/>
      <label style={styles.label}>Message</label>
      <textarea name="message" style={styles.textarea}></textarea>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
    <div style={styles.map}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1129074786744!2d144.9632!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb4c90f1e6fa4e235!2sEducation%20Lane%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1618976955075!5m2!1sen!2sus" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>
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
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: '30px',
  },
  info: {
    marginBottom: '20px',
    fontSize: '1.2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  map: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default ContactUs;
