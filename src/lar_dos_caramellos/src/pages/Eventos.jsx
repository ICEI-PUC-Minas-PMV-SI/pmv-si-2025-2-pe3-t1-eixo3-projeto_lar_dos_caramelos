import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import Footer from "../components/FooterComponent";
// import Navbar from "../components/NavbarComponent"; // descomente se tiver
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import hero from "../assets/hero-dogs.jpg";
import dog1 from "../assets/dog-1.jpg";
import dog2 from "../assets/dog-2.jpg";
import dog3 from "../assets/dog-3.jpg";

// import heroImage from "../assets/hero.jpg"; // se quiser imagem no topo

const eventos = [
  {
    id: 1,
    title: "Feira de Adoção de Primavera",
    date: "15 de Março, 2025",
    time: "10:00 - 16:00",
    location: "Parque Municipal Central",
    description:
      "Grande feira de adoção com mais de 50 cães e gatos procurando um lar. Venha conhecer nossos amigos peludos!",
    image: dog1,
    status: "upcoming",
    attendees: 120,
  },
  {
    id: 2,
    title: "Domingo de Adoção",
    date: "22 de Março, 2025",
    time: "09:00 - 14:00",
    location: "Centro Comunitário São José",
    description:
      "Evento especial focado em cães de porte médio e grande. Processo de adoção simplificado no local.",
    image: dog2,
    status: "upcoming",
    attendees: 85,
  },
  {
    id: 3,
    title: "Adote um Amigo Senior",
    date: "5 de Abril, 2025",
    time: "11:00 - 17:00",
    location: "Shopping Verde Vale",
    description:
      "Campanha especial para adoção de pets mais velhos. Inclui consulta veterinária gratuita e kit de boas-vindas.",
    image: dog3,
    status: "upcoming",
    attendees: 60,
  },
];

const Eventos = () => {
  const upcomingEvents = eventos.filter((event) => event.status === "upcoming");

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Navbar /> */}

      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(90deg, #ff7b00 0%, #ff9a5c 100%)",
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Eventos de Adoção</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Participe dos nossos eventos e encontre seu novo melhor amigo!
            Todos os nossos eventos são gratuitos e abertos ao público.
          </p>
          <img
  src={hero}
  alt="Hero"
  className="img-fluid rounded mt-4"
  style={{ maxHeight: "650px", objectFit: "cover", width: "100%" }}
/>

        </div>
      </section>

      <main className="flex-grow-1 py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Próximos Eventos</h2>

          <div className="row g-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="overflow-hidden" style={{ height: "300px" }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="card-img-top h-100 w-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text text-muted">{event.description}</p>

                    <ul className="list-unstyled mt-auto small">
                      <li className="mb-1 d-flex align-items-center">
                        <Calendar size={16} className="me-2 text-primary" />
                        {event.date}
                      </li>
                      <li className="mb-1 d-flex align-items-center">
                        <Clock size={16} className="me-2 text-primary" />
                        {event.time}
                      </li>
                      <li className="d-flex align-items-center">
                        <MapPin size={16} className="me-2 text-primary" />
                        {event.location}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Eventos;

