/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './assets/css/layout/back.css';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/font-awesome.css';
import './assets/css/vendor/slick-theme.css';
import './assets/css/vendor/slick.css';
import './assets/css/app.css';
import './assets/js/vendor/bootstrap.min.js';
import './assets/js/vendor/jquery-3.6.3.min.js';
import './assets/js/vendor/jquery-appear.js';

import { useTranslation } from 'react-i18next';
import './i18n.ts';

import './assets/js/app.js'; // Make sure to import your CSS styles here

function Navbar() {
  const { t } = useTranslation();

  return (
    <header id="navbar" className="large-screens navbar-container mb-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(180deg, #E8F3FF 0%, #EAFFEA 100%)' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/"><img alt="" src="src/assets/media/icons/c-removebg-preview.png" className="logo-img" style={{ width: '100px', height: 'auto' }} /></a>
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav mainmenu">
              <li className="nav-item"><a className="nav-link text-black" href="#services">{t('proyectos')}</a></li>
              <li className="nav-item"><a className="nav-link text-black" href="#skills">{t('habilidades')}</a></li>
              <li className="nav-item"><a className="nav-link text-black" href="#experience">{t('Testimonios')}</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileNavbar() {
  return (
    <header className="small-screen" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}> {/* Add a black shadow with opacity */}
      <div className="container">
        <div className="mobile-menu">
          <a className="navbar-brand" href="/"><img alt="" src="assets/media/icons/logo_trial.png" /></a>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
        <nav className="mobile-navar d-xl-none">
          <ul>
            <li className="menu-item"><a href="#services">Services</a></li>
            <li className="menu-item"><a href="#skills">Skills</a></li>
            <li className="menu-item"><a href="#experience">Testimonials</a></li>
            <li className="menu-item"><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



function Header() {
  const { t, i18n } = useTranslation(); // Hook useTranslation para acceder a las traducciones

  // Función para cambiar el idioma
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es'; // Cambiar a 'en' si está en español, o a 'es' si está en inglés
    i18n.changeLanguage(newLanguage); // Cambiar el idioma en el objeto i18n
  };

  return (
    <header id="headermain" className="mb-4 text-center" style={{ backgroundImage: `url('src/assets/media/banner/banner2.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container">
        <div className="row headerwrap">
          <div className="col-lg-6 align-items-center" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div className="headerwrap__text text-right" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <h1 style={{ fontSize: '2.5rem' }}>{t('David Inguilan')}</h1>
              <p>{t('header.subtitle')}</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="headerwrap__logo rounded-circle overflow-hidden" style={{ padding: '100px' }}>
              <img src="src\assets\media\icons\giphy.gif" alt="logo" className="img-fluid rounded-circle" style={{ width: '300px', height: '300px' }} />
            </div>
          </div>
          <div className="col-lg-2 d-block d-lg-none">
            <div className="navicon">
              <div className="navicon__bar"></div>
            </div>
          </div>
          {/* Button to change language */}
          <div className="col-lg-12 d-flex justify-content-center mt-4">
            <button className="language-button" onClick={handleChangeLanguage}>
              {i18n.language === 'es' ? 'Change to English' : 'Cambiar a español'}
            </button>
          </div>
          {/* End of language button */}
        </div>
      </div>
    </header>
  );
}

function HeroBanner() {
  const { t } = useTranslation(); // Hook de traducción
  const contactInfo = [
    { label: t('Correo electrónico'), value: 'dg4834307@gmail.com' },
    { label: t('Teléfono'), value: '3235806283' },
    { label: t('Dirección'), value: '11 Street, City, Pasto' }
  ];

  return (
    <section className="hero-banner bg-blue-transparent mb-4">
      <div className="heading mb-48">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-block bg-gradient shadow br-30 p-4">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1 className="mb-16" style={{ fontSize: '3rem' }}>David Inguilán</h1>
                  <h5 className="dark-gray mb-16">"{t('Desarrollador de software comprometido con la excelencia y la innovación.')}"</h5>
                  <ul className="contact-list mb-0">
                    {contactInfo.map((info, index) => (
                      <li className="text-black" key={index}>
                        <strong>{info.label}:</strong> {info.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-16">{t('Acerca de mí')}</h2>
                  <h5 className="dark-gray mb-4">
                    "{t('Como ingeniero de software dedicado, poseo una sólida formación académica y una sed insaciable de aprendizaje y crecimiento en el ámbito tecnológico. Mi objetivo es contribuir al desarrollo de soluciones de software robustas mientras amplío continuamente mi experiencia en programación y me mantengo al tanto de las tecnologías emergentes y las tendencias de la industria.')}"
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line react/prop-types
function Projects({ backgroundImage }) {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <section className="services p-50" id="services" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${backgroundImage})`, padding: '0.1rem' }}>
      <div className="container">
        <div className="heading ">
          {/* Cambiar el tamaño de letra del título */}
          <h3 className="mb-20" style={{ fontSize: '5rem' }}>{t('Proyectos')}</h3>
        </div>
        {/* Agregar un botón para regresar a la barra de navegación */}
        <a href="#navbar" className="btn-back-to-top">{t('Volver a la Navegación')}</a>
        <div className="row">
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              {/* Cambiar el tamaño de letra del título */}
              <h4 className="mb-16" style={{ fontSize: '1.5rem' }}>{t('Generador de Contraseñas Seguras')}</h4>
              <img src="src/assets/media/banner/passwordgenerator.webp" alt={t('Generador de Contraseñas Seguras')} className="zoom-image" style={{ marginBottom: '20px' }} />
              {/* Cambiar el tamaño de letra del párrafo */}
              <p style={{ fontSize: '1rem' }}>{t('Descripción: Programa que genera contraseñas seguras de forma aleatoria y las muestra al usuario. Se puede configurar la longitud y los tipos de caracteres. Tecnologías: Python con CLI o GUI utilizando bibliotecas como Tkinter o PyQt.')}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              {/* Cambiar el tamaño de letra del título */}
              <h4 className="mb-16" style={{ fontSize: '1.5rem' }}>{t('Sitio web de ventas de café impulsado por base de datos de Azure')}</h4>
              <img src="src/assets/media/banner/cafeterias.webp" alt={t('Sitio web de ventas de café impulsado por base de datos de Azure')} className="zoom-image" style={{ marginBottom: '20px' }} />
              {/* Cambiar el tamaño de letra del párrafo */}
              <p style={{ fontSize: '1rem' }}>{t('Descripción: Un sitio web para comprar café con base de datos en la nube de Azure. Tecnologías: HTML, CSS, JavaScript, Node.js o ASP.NET Core, Base de datos SQL o Cosmos DB.')}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              {/* Cambiar el tamaño de letra del título */}
              <h4 className="mb-16" style={{ fontSize: '1.5rem' }}>{t('API de películas usando Django REST Framework')}</h4>
              <img src="src/assets/media/banner/apipeliculas.png" alt={t('API de películas usando Django REST Framework')} className="zoom-image" style={{ marginBottom: '20px' }} />
              {/* Cambiar el tamaño de letra del párrafo */}
              <p style={{ fontSize: '1rem' }}>{t('Descripción: Una API de películas construida con Django REST Framework. Tecnologías: Django REST Framework, Django ORM.')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









function Skills() {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <section className="skills p-40" id="skills" style={{ padding: '4rem' }}>
      <div className="container">
        <div className="heading mb-20">
          {/* Nuevo elemento div con el cambio de tamaño de letra */}
          <div className="heading">
            <h3 className="mb-20" style={{ fontSize: '5rem' }}>{t('Habilidades')}</h3>
          </div>
          {/* Fin del nuevo elemento div */}
          <h5>{t('Empoderando experiencia: Mi conjunto de habilidades en foco.')}</h5>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/mysl1.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">MySql</h4>
                <p>{t('Experto en MySQL, gestionando eficientemente bases de datos relacionales para crear sistemas de almacenamiento robustos y escalables.')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/ts.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">TypeScript</h4>
                <p>{t('Dominio de TypeScript, potenciando la programación JavaScript con un sistema de tipos estático para desarrollar aplicaciones más seguras y confiables.')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/python.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.6)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">Python</h4>
                <p>{t('Excelentes habilidades en Python, utilizándolo para una amplia gama de aplicaciones, desde desarrollo web hasta inteligencia artificial.')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src\assets\media\banner\imajava.jpg"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">JavaScript</h4>
                <p>{t('Experiencia en JavaScript, creando interactividad dinámica en páginas web y desarrollando aplicaciones tanto del lado del cliente como del servidor.')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/c_.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">C#</h4>
                <p>{t('Especialista en C#, construyendo aplicaciones de alto rendimiento y escalables en el ecosistema de Microsoft.')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/nodejs.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">Node js</h4>
                <p>{t('Experiencia sólida en Node.js, aprovechando su capacidad para desarrollar servicios web rápidos y eficientes.')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Botón para regresar a la barra de navegación */}
       

        <a href="#navbar" className="btn-back-to-top">{t('Volver a la navegación')}</a>
      </div>
    </section>
  );
}




function Experience() {
  const { t } = useTranslation(); // Hook de traducción

  // Array de testimonios con fotos
  const testimonials = [
    {
      name: "Sofia Pedrozo",
      product: t("Generador de Contraseñas Seguras"),
      comment: t("¡Increíble! Este generador de contraseñas es fácil de usar y ofrece opciones personalizables. Me siento más seguro con contraseñas fuertes para mis cuentas en línea; ¡altamente recomendado!"),
      photoUrl: "src/assets/media/Señora.jpg" // URL de la foto de Sofia Pedrozo
    },
    {
      name: "Ricardo Cardona",
      product: t("Sitio web de venta de café impulsado por base de datos Azure"),
      comment: t("¡Experiencia de compra asombrosa! Amplia selección de café de calidad, navegación fácil y delicioso café; ¡mi destino favorito para comprar café en línea!"),
      photoUrl: "src/assets/media/Señor1.jpg" // URL de la foto de Ricardo Cardona
    },
    {
      name: "Miguelito Revelo",
      product: t("API de Películas usando Django REST Framework"),
      comment: t("¡Excelente API! Fácil de integrar, documentación clara y soporte receptivo. Una herramienta valiosa para cualquier desarrollador de aplicaciones."),
      photoUrl: "src/assets/media/Hombre.jpg" // URL de la foto de Miguelito Revelo
    }
  ];

  return (
    <section className="experience p-40" id="experience" style={{ padding: '0.1rem', marginBottom: '2rem' }}>
      <div className="container">
        <div className="heading mb-24">
          <h2 className="mb-16">{t("Testimonios")}</h2>
          <h5>{t("“Los testimonios de mis mejores clientes respaldan la calidad de mi mejor trabajo.”")}</h5>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="content-block bg-gradient shadow br-30 p-20">
                <div className="testimonial-info d-flex flex-column align-items-center">
                  {/* Imagen del testimonio en la esquina superior izquierda */}
                  <img src={testimonial.photoUrl} alt={testimonial.name} className="testimonial-photo" />
                  <div className="testimonial-details text-center">
                    <h3 style={{ marginBottom: '10px' }}>{testimonial.name}</h3> {/* Puedes ajustar marginBottom */}
                    <h4 style={{ marginBottom: '10px' }}>{testimonial.product}</h4> {/* Puedes ajustar marginBottom */}
                    <p style={{ marginBottom: '10px' }}>{testimonial.comment}</p> {/* Puedes ajustar marginBottom */}
                    <div className="stars text-right mt-auto">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




function Footer() {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container">
        <div className="content">
          <h6>{t("Portfolio David Inguilán.")}</h6>
          <ul className="social-icons unstyled d-flex justify-content-center">
            <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Behance.png" alt="Behance" style={{backgroundColor: "#1769FF"}} /></a></li>
            <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Dribbble.png" alt="Dribbble" style={{backgroundColor: "#EA4C89"}} /></a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Twitter.png" alt="Twitter" style={{backgroundColor: "#1DA1F2"}} /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Linkedin.png" alt="Linkedin" style={{backgroundColor: "#0077B5"}} /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png" alt="Instagram" style={{backgroundColor: "#E4405F", width: "28px", height: "28px"}} /></a></li>
            <li><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{backgroundColor: "#0088CC", width: "28px", height: "28px"}} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}






function App() {
  return (
    <div className="bg-gray-100">
      <a href="#main-wrapper" id="backto-top" className="back-to-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Navbar />
        <MobileNavbar />
        <Header />
        <HeroBanner />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}




export default App;
