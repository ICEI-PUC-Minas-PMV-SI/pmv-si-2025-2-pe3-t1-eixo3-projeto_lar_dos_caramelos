import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Heart, DollarSign, Calendar, Gift } from "lucide-react";
import Footer from "../components/FooterComponent";

import dog1 from "../assets/dog-1.jpg";
import dog2 from "../assets/dog-2.jpg";
import dog3 from "../assets/dog-3.jpg";

const Apadrinhe = () => {
  const sponsorshipPlans = [
    {
      id: 1,
      name: "Plano Básico",
      price: "R$ 50",
      period: "/mês",
      benefits: [
        "Alimentação adequada",
        "Higiene e banhos",
        "Foto mensal do pet",
        "Certificado de padrinho",
      ],
    },
    {
      id: 2,
      name: "Plano Completo",
      price: "R$ 100",
      period: "/mês",
      benefits: [
        "Todos os benefícios do Plano Básico",
        "Atendimento veterinário",
        "Vacinas e vermífugos",
        "Visitas mensais",
        "Vídeos do pet",
      ],
      featured: true,
    },
    {
      id: 3,
      name: "Plano Premium",
      price: "R$ 200",
      period: "/mês",
      benefits: [
        "Todos os benefícios do Plano Completo",
        "Treinamento comportamental",
        "Kit personalizado",
        "Visitas semanais",
        "Prioridade na adoção",
      ],
    },
  ];

  const sponsoredDogs = [
    {
      id: 1,
      name: "Toby",
      image: dog1,
      sponsors: 3,
      description:
        "Toby está esperando por mais padrinhos para ter uma vida melhor!",
    },
    {
      id: 2,
      name: "Mel",
      image: dog2,
      sponsors: 5,
      description: "Mel adora receber carinho e está precisando de ajuda.",
    },
    {
      id: 3,
      name: "Thor",
      image: dog3,
      sponsors: 2,
      description: "Thor é super brincalhão e precisa do seu apoio!",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada!");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />

      <main className="flex-fill">
        {/* Hero */}
        <section className="py-5 text-center bg-warning-subtle">
          <div className="container">
            <Heart size={64} color="#dc3545" className="mb-3" />
            <h1 className="fw-bold mb-3">Seja um Padrinho</h1>
            <p className="lead text-muted">
              Não pode adotar mas quer ajudar? Apadrinhe um pet e faça a
              diferença na vida dele! Seu apoio garante alimentação, cuidados
              veterinários e muito carinho.
            </p>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-5 bg-light border-top border-bottom">
          <div className="container text-center">
            <h2 className="fw-bold mb-5">Como Funciona o Apadrinhamento</h2>
            <div className="row g-4 justify-content-center">
              {[
                {
                  icon: <Heart color="#dc3545" />,
                  title: "1. Escolha um Pet",
                  text: "Selecione o pet que você quer apadrinhar",
                },
                {
                  icon: <DollarSign color="#dc3545" />,
                  title: "2. Escolha o Plano",
                  text: "Defina o valor da sua contribuição mensal",
                },
                {
                  icon: <Calendar color="#dc3545" />,
                  title: "3. Acompanhe",
                  text: "Receba fotos e atualizações mensais",
                },
                {
                  icon: <Gift color="#dc3545" />,
                  title: "4. Visite",
                  text: "Agende visitas e acompanhe o progresso",
                },
              ].map((item, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="p-4 border rounded bg-white h-100 shadow-sm">
                    <div className="mb-3">{item.icon}</div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted small">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Planos de Apadrinhamento</h2>
            <p className="text-muted mb-5">
              Escolha o plano que melhor se adequa à sua realidade. Qualquer
              contribuição faz diferença!
            </p>
            <div className="row g-4 justify-content-center">
              {sponsorshipPlans.map((plan) => (
                <div key={plan.id} className="col-md-4">
                  <div
                    className={`card h-100 border-2 position-relative ${
                      plan.featured ? "border-danger shadow" : ""
                    }`}
                  >
                    {plan.featured && (
                      <span className="badge bg-danger position-absolute top-0 start-50 translate-middle mt-3">
                        Mais Popular
                      </span>
                    )}
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{plan.name}</h5>
                      <h3 className="text-danger fw-bold">
                        {plan.price}
                        <small className="text-muted fs-6"> {plan.period}</small>
                      </h3>
                      <ul className="list-unstyled mt-3 mb-4">
                        {plan.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-start">
                            <Heart
                              size={16}
                              color="#dc3545"
                              className="me-2"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`btn ${
                          plan.featured ? "btn-danger" : "btn-outline-danger"
                        } w-100`}
                      >
                        Escolher Plano
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pets */}
        <section className="py-5 bg-light border-top border-bottom">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Pets Aguardando Padrinhos</h2>
            <p className="text-muted mb-5">
              Conheça alguns pets que precisam do seu apoio
            </p>
            <div className="row g-4 justify-content-center">
              {sponsoredDogs.map((dog) => (
                <div key={dog.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={dog.image}
                      alt={dog.name}
                      className="card-img-top"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{dog.name}</h5>
                      <p className="text-muted small">{dog.description}</p>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <Heart
                          size={16}
                          color="#dc3545"
                          className="me-1"
                        />
                        <span className="text-muted small">
                          {dog.sponsors}{" "}
                          {dog.sponsors === 1 ? "padrinho" : "padrinhos"}
                        </span>
                      </div>
                      <button className="btn btn-danger w-100">
                        Apadrinhar {dog.name}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-5">
          <div className="container">
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <h2 className="fw-bold text-center mb-3">Fale Conosco</h2>
              <p className="text-center text-muted mb-4">
                Tem dúvidas sobre o apadrinhamento? Entre em contato!
              </p>
              <div className="card shadow-sm">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Mensagem
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Conte-nos como você quer ajudar..."
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger w-100">
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Apadrinhe;
