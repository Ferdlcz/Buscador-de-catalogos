import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div className="container">
        <p>
          Catálogos y contenido obtenidos de las páginas oficiales de{" "}
          <a className="text-blue-500 underline" href="https://www.andrea.com">Andrea</a> y{" "}
          <a className="text-blue-500 underline" href="https://www.cklass.com">Cklass</a>. Este sitio web utiliza
          imágenes y contenido bajo los principios del uso justo para fines de
          comentario, crítica y referencia. Si eres el propietario del contenido
          y deseas que se elimine, por favor{" "}
          <a href="mailto:ferdlcskate@gmail.com" className="text-blue-500 underline">
            contáctanos
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
