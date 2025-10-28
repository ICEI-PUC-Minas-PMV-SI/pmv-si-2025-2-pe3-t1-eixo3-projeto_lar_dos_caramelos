import React from "react";
import Navbar from "../components/NavbarComponent";
import Footer from "../components/FooterComponent";
import { Heart, Quote } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

import dog1 from "../assets/dog-1.jpg";
import dog2 from "../assets/dog-2.jpg";
import dog3 from "../assets/dog-3.jpg";


const Historias = () => {
  const adoptionStories = [
    {
      petImage: dog1,
      petName: "Max",
      ownerName: "Carlos Silva",
      story:
        "Adotei o Max há 2 anos e foi a melhor decisão da minha vida. Ele trouxe alegria e companheirismo para nossa família. Todos os dias ele me espera na porta com aquele olhar amoroso.",
      testimonial:
        "Max transformou nossa casa em um lar cheio de amor e alegria. Não consigo imaginar nossa vida sem ele!",
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
      date: "Maio 2023",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* <Navbar /> */}

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-gradient py-5 text-center" style={{ background:"#fff3cd" }} >
          <div className="container">
            <Heart size={64} color="#f58f01ff" fill="#f58f01ff" className="mb-3" />
            <h1 className="fw-bold display-5 mb-3">Histórias de Adoção</h1>
            <p className="text-muted fs-5">
              Histórias reais de amor, transformação e felicidade. Inspire-se e
              faça parte dessa mudança!
            </p>
          </div>
        </section>

        {/* Statistics Section  "#fff3cd" */}
        <section className="py-5 "style={{ background:"#fff3cd" }} >  

          <div className="container text-center">
            <div className="row g-4">
              <div className="col-md-4">
                <h2 className="fw-bold text-color=black">150+</h2>
                <p className="text-muted">Cães Adotados</p>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bold text-color=black">200+</h2>
                <p className="text-muted">Famílias Felizes</p>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bold text-color=black">5 Anos</h2>
                <p className="text-muted">Transformando Vidas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Adoption Stories Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-3">Histórias que Inspiram</h2>
            <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Cada adoção é uma história única de amor, superação e
              companheirismo.
            </p>

            <div className="row g-4">
              {adoptionStories.map((story, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="ratio ratio-1x1 overflow-hidden">
                      <img
                        src={story.petImage}
                        alt={`${story.petName} com ${story.ownerName}`}
                        className="card-img-top object-fit-cover"
                        style={{ transition: "transform 0.3s" }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-4">{story.petName}</h5>
                      <h6 className="text-primary fw-semibold small mb-3">
                        Adotado por {story.ownerName} • {story.date}
                      </h6>
                      <p className="text-muted">{story.story}</p>
                      <div className="bg-body-tertiary p-3 rounded position-relative">
                        <Quote
                          size={20}
                          className="text-primary position-absolute top-0 start-0 m-2 opacity-50"
                        />
                        <p className="fst-italic small ps-4 mb-0">
                          {story.testimonial}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 text-center" style={{ background:"#fff3cd" }} >
          <div className="container">
            <h2 className="fw-bold mb-3">Escreva Sua Própria História</h2>
            <p className="text-muted fs-5 mb-4 mx-auto" style={{ maxWidth: "700px" }}>
              Cada adoção é uma história de amor esperando para ser escrita.
              Venha conhecer nossos cães disponíveis e encontre seu novo melhor
              amigo.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="/caes" className="btn text-white px-4 py-2 fw-semibold" style={{ backgroundColor:"orange"}}> 

                Conhecer Cães Disponíveis
              </a>
              <a href="/dicas" className="btn btn-outline-secondary px-4 py-2 fw-semibold">
                Dicas de Cuidados
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Historias;