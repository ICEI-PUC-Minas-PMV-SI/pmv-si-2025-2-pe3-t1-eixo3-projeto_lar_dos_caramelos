import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";
import Footer from "../components/FooterComponent";
import { Heart, Quote } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

import dog1 from "../assets/dog e tutor 1.png";
import dog2 from "../assets/dog e tutora 2.png";
import dog3 from "../assets/dog e tutora 3.png";

const Historias = () => {
  const [likes, setLikes] = useState([0, 0, 0]); // contador simbólico de likes
  const [modalShow, setModalShow] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const adoptionStories = [
    {
      petImage: dog1,
      petName: "Max",
      ownerName: "Carlos Silva",
      story:
        "Adotei o Max há 2 anos e foi a melhor decisão da minha vida. Ele trouxe alegria e companheirismo para nossa família. Todos os dias ele me espera na porta com aquele olhar amoroso.",
      testimonial:
        "Max transformou nossa casa em um lar cheio de amor e alegria. Não consigo imaginar nossa vida sem ele!",
      fullStory:
        "Adotar o Max mudou completamente nossa rotina. Ele nos ensinou responsabilidade, paciência e trouxe muita felicidade para cada dia da família. Participamos de atividades juntos e sentimos uma conexão incrível!",
      date: "Janeiro 2023",
    },
    {
      petImage: dog2,
      petName: "Luna",
      ownerName: "Ana Costa",
      story:
        "Luna estava assustada no abrigo, mas com amor e paciência, ela se tornou a cadela mais afetuosa que conheço. Hoje ela é a melhor amiga dos meus filhos.",
      testimonial:
        "Luna nos ensinou o verdadeiro significado de resiliência e amor incondicional. Ela é parte da família!",
      fullStory:
        "Ao adotar a Luna, aprendemos a importância da paciência e do cuidado constante. Cada dia com ela é cheio de alegria, brincadeiras e aprendizado mútuo. Ela trouxe uma energia incrível para nossa casa!",
      date: "Março 2023",
    },
    {
      petImage: dog3,
      petName: "Thor",
      ownerName: "Pedro Santos",
      story:
        "Thor mudou completamente a minha rotina. Agora acordo cedo para passear e sou muito mais ativo e feliz. Ele me tirou do sedentarismo e trouxe propósito para meus dias.",
      testimonial:
        "Adotar o Thor foi a melhor decisão que já tomei. Ele não só mudou minha saúde física, mas também a mental!",
      fullStory:
        "Thor trouxe disciplina, alegria e muita energia para os meus dias. Passeios matinais, brincadeiras e cuidados diários se tornaram rotina, fortalecendo nosso vínculo e melhorando minha qualidade de vida de forma impressionante.",
      date: "Maio 2023",
    },
  ];

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleShowModal = (story) => {
    setSelectedStory(story);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedStory(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <main className="flex-grow-1">
        <section className="py-5 text-center" style={{ background: "#fff3cd" }}>
          <div className="container">
            <Heart size={64} color="#ff7b00" fill="#ff7b00" className="mb-3" />
            <h1 className="fw-bold display-5 mb-3">Histórias de Adoção</h1>
            <p className="text-muted fs-5">
              Histórias reais de amor, transformação e felicidade. Inspire-se e faça parte dessa mudança!
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-3">Histórias que Inspiram</h2>
            <div className="row g-4">
              {adoptionStories.map((story, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="overflow-hidden">
                      <img
                        src={story.petImage}
                        alt={`${story.petName} com ${story.ownerName}`}
                        className="card-img-top"
                        style={{
                          height: "400px",
                          width: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-4">{story.petName}</h5>
                      <h6 className="text-warning fw-semibold small mb-3">
                        Adotado por {story.ownerName} • {story.date}
                      </h6>
                      <p className="text-muted">{story.story}</p>

                      <div className="bg-body-tertiary p-3 rounded position-relative mb-2">
                        <Quote
                          size={20}
                          className="text-warning position-absolute top-0 start-0 m-2 opacity-50"
                        />
                        <p className="fst-italic small ps-4 mb-0">{story.testimonial}</p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <Button variant="outline-primary" size="sm" onClick={() => handleShowModal(story)}>
                          Ver mais
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleLike(index)}>
                          ❤️ {likes[index]}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal para relato completo */}
        <Modal show={modalShow} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedStory?.petName} • {selectedStory?.ownerName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedStory?.fullStory}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
      <Footer />
    </div>
  );
};

export default Historias;
