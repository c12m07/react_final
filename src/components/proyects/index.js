import React from 'react';
import Header from '../header';
import Footer from '../footer';
import MediaCard from './Card';
import './Proyects.css';

function Proyects() {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Proyectos</h2>
        <div className="container__proyects">
          <MediaCard
            imageUrl="/assets/proyecto1.png"
            imageAlt="Previsualización de página"
            title="Página Tours"
            viewUrl="https://c12m07.github.io/colombiaTours/"
            codeUrl="https://github.com/c12m07/colombiaTours.git"
          />
          <MediaCard
            imageUrl="/assets/proyecto2.png"
            imageAlt="Previsualización de página"
            title="Cursos LarnU"
            viewUrl="https://c12m07.github.io/api_js/"
            codeUrl="https://github.com/c12m07/api_js.git"
          />
          <MediaCard
            imageUrl="/assets/proyecto3.png"
            imageAlt="Previsualización de página"
            title="Maquetación responsiva"
            viewUrl="https://c12m07.github.io/plantilla2.github.io/"
            codeUrl="https://github.com/c12m07/plantilla2.github.io.git"
          />
          <MediaCard
            imageUrl="/assets/proyecto4.png"
            imageAlt="Previsualización de página"
            title="Primer portafolio"
            viewUrl="https://c12m07.github.io/repositorio.github.io/index.html"
            codeUrl="https://github.com/c12m07/repositorio.github.io.git"
          />
          <MediaCard
            imageUrl="/assets/proyecto5.png"
            imageAlt="Previsualización de página"
            title="Segundo portafolio"
            viewUrl="https://c12m07.github.io/plantilla.github.io/"
            codeUrl="https://github.com/c12m07/plantilla.github.io.git"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Proyects;
