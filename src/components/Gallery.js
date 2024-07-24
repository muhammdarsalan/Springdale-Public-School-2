import React from 'react';
import sportsDay from '../assets/sports_day.jpg';
import scienceExhibition from '../assets/science_exhibition.jpg';
import culturalFest from '../assets/cultural_fest.jpg';
import classroom from '../assets/classroom.jpg';
import library from '../assets/library.jpg';

const Gallery = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Gallery</h1>
    <div style={styles.photos}>
      <img src={sportsDay} alt="Students participating in various sports events." style={styles.photo} />
      <img src={scienceExhibition} alt="Students presenting their science projects." style={styles.photo} />
      <img src={culturalFest} alt="Students performing in the cultural fest." style={styles.photo} />
      <img src={classroom} alt="A glimpse of our interactive classrooms." style={styles.photo} />
      <img src={library} alt="Students reading and studying in the school library." style={styles.photo} />
    </div>
    <div style={styles.videos}>
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls style={styles.video} />
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls style={styles.video} />
    </div>
  </div>
);

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
  },
  photos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  photo: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  videos: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  video: {
    width: 'calc(50% - 20px)',
    height: 'auto',
  },
};

export default Gallery;
