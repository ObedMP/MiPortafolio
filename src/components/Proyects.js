import "./Proyects.css";

function Proyects() {
  return (
    <section id="projects" className="Proyects-container">
      <div className="Proyects-title">
        <h2>My Projects</h2>
      </div>
      <div className="Proyects-card-container">
        <div className="proyect-1 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">Api Pedidos</h3>
              <p className="proyect-description">
              Collaborative <span>Backend</span> Project in the Development of an Orders API 
              with Spring Boot and JWT as authentication to the API requests,
               Mysql was used as a database and it was deployed in Apache, 
               testing with Mockito and Junit5.
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-spring"></div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <a
              className="img-link"
              href="https://gymate-site.netlify.app/"   Esta implementacion es para el despliegue de la API
              target="_blank"
              rel="noreferrer" 
            >*/}
            
              <div className="img-proyect-1"></div>
            
            

            
            <div className="proyect-links">
              {/*
              <a
                href="https://gymate-site.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
              
                <i className="bx bx-sm bx-globe"></i>
              </a>
          */}
          
              <a
                href="https://github.com/ObedMP/ApiRestPedidos"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="proyect-2 proyect-container">
          <div className="right">
            {/*<a
              className="img-link"
              href="https://nicavideo-webapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
        >*/}
              <div className="img-proyect-2"></div>
            
            <div className="proyect-links">
              {/*}
              <a
                href="https://nicavideo-webapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
        </a> */}
              <a
                href="https://github.com/ObedMP/TiendaEnLinea"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">Online Store 🛒</h3>
              <p className="proyect-description">
              Online Store System managed with Shopping Carts and 
              purchase processing module, using ASP.NET MVC
              (with a SQL Server DB).
              </p>
            </div>

            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-b"></div>
                <div className="skill-k"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="proyect-3 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title"> Library System 📖 </h3>
              <p className="proyect-description">
              Library System developed in Java Spring boot with 
              the MVC architecture, implementing the Angular frontend 
              for managing views and forms. With Postgresql to DB.
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-d"></div>
                <div className="skill-spring"></div>
              </div>
            </div>
          </div>
          <div className="right">
            {/*<a
              className="img-link"
              href="https://songy-webapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
      >*/}
              <div className="img-proyect-3"></div>
            
            <div className="proyect-links">
              {/*<a
                href="https://songy-webapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
                </a>*/}
              <a
                href="https://github.com/ObedMP/Sistema_Bibliotecario"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="proyect-4 proyect-container">
          <div className="right">
           {/*} <a
              className="img-link"
              href="https://notecloud-webapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              >*/}
              <div className="img-proyect-4"></div>
            
            <div className="proyect-links">
              {/*<a
                href="https://notecloud-webapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
              </a>*/}
              <a
                href="https://github.com/ObedMP/ManageCustomer"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">Customer Manage System</h3>
              <p className="proyect-description">
               Backend Project Using Java EE, a small client control system was implemented
               using servlets and jsp, also adding DAO data patterns, Mysql 
               with JDBC was used for the data. Boostrap was used for the views.
              </p>
            </div>

            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
