import React from 'react';
import './About.css';
import Card from '../../ui/cards/Card';
import dashboard_img from './dashboard.png'



function About() {
  const projects = [
    {
      title: 'Dashboard Basico',
      description: 'Dashboard donde practique fundamentos de CSS y HTML',
      liveDemoLink: 'https://hugobritez.github.io/admin_dashboard/',
      sourceCodeLink: 'https://github.com/HugoBritez/admin_dashboard.git',
      image: dashboard_img
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liveDemoLink: 'http://live-demo-link-2.com',
      sourceCodeLink: 'http://source-code-link-2.com'
    },

    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liveDemoLink: 'http://live-demo-link-2.com',
      sourceCodeLink: 'http://source-code-link-2.com'
    },

    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liveDemoLink: 'http://live-demo-link-2.com',
      sourceCodeLink: 'http://source-code-link-2.com'
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liveDemoLink: 'http://live-demo-link-2.com',
      sourceCodeLink: 'http://source-code-link-2.com'
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liveDemoLink: 'http://live-demo-link-2.com',
      sourceCodeLink: 'http://source-code-link-2.com'
    },
    

    
  ];

  return (
    <div>
      <section className="about_section">
        <div className="sobremi_section">
          <div className="section_title">Sobre mi</div>
          <div className="sobremi_content card2">
          <p>
          Soy un desarrollador web y móvil con amplia experiencia en tecnologías como Dart, React Native, JavaScript (Vanilla y React), Node.js, Django y Python. Me especializo en crear aplicaciones móviles y web con interfaces intuitivas y sistemas back-end robustos.</p>

          <p>Cuento con una certificación en Gestión de Proyectos de LinkedIn y actualmente me capacito en Análisis de Datos con IBM. Además, tengo una beca de Oracle, donde profundizo en JavaScript, SQL, Java y servicios en la nube de Oracle.</p>

          <p>Destaco por mi capacidad de mentoría, liderazgo y gestión de proyectos, asegurando entregas a tiempo y dentro del presupuesto. Soy adaptable y siempre busco aprender nuevas tecnologías. Mi comunicación efectiva me permite colaborar exitosamente con equipos multidisciplinarios.</p>

          <p>Siempre busco nuevos desafíos para aplicar mis habilidades y contribuir a proyectos innovadores, ayudando a otros a alcanzar su máximo potencial en el desarrollo.
          </p>

        <div className="button_container">
          
          
          <button className="button">
            Descargar CV
          </button>

          <button className="button">
            Contactame!
          </button>
          
          </div>

          
            
          </div>
        </div>



        <div className="portfolio_section">
          <div className="section_title">Proyectos</div>
          <div className="proyectos_section">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                liveDemoLink={project.liveDemoLink}
                sourceCodeLink={project.sourceCodeLink}
                image={project.image}
              />
            ))}
          </div>

              


        </div>


      </section>
    </div>
  );
}

export default About;
