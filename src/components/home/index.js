import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className='container ContainerHome'>
        <div className='photo'>
          <img height='200px' src='/assets/yo.jpg' alt='Foto' />
        </div>
        <h2>¿Quién soy?</h2>
        <p>
          Mi nombre es Carlos Martinez. Tengo 18 años y soy de
          Colombia. Soy un futuro programador full stack.{' '}
        </p>
        <ul>
          Conocimientos:
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>LESS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
        <p>LarnU Bootcamp 2022</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
