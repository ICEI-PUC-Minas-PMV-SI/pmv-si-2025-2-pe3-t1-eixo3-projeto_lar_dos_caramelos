import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Heart, DollarSign, Calendar, Gift } from "lucide-react";
import Footer from "../components/FooterComponent";

import dog1 from "../assets/dog-1.png";
import dog2 from "../assets/dog-2.png";
import dog3 from "../assets/dog-3.png";
import dog4 from "../assets/dog-4.png";
import dog5 from "../assets/dog-5.png";
import dog6 from "../assets/dog-6.png"; 

const Apadrinhe = () => {
  const planos = [
    {
      id: 1,
      nome: "Plano Básico",
      preco: "R$ 50",
      periodo: "/mês",
      beneficios: [
        "Alimentação adequada",
        "Higiene e banhos",
        "Foto mensal do pet",
        "Certificado de padrinho",
      ],
    },
    {
      id: 2,
      nome: "Plano Completo",
      preco: "R$ 100",
      periodo: "/mês",
      beneficios: [
        "Todos os benefícios do Plano Básico",
        "Atendimento veterinário",
        "Vacinas e vermífugos",
        "Visitas mensais",
        "Vídeos do pet",
      ],
      destaque: true,
    },
    {
      id: 3,
      nome: "Plano Premium",
      preco: "R$ 200",
      periodo: "/mês",
      beneficios: [
        "Todos os benefícios do Plano Completo",
        "Treinamento comportamental",
        "Kit personalizado",
        "Visitas semanais",
        "Prioridade na adoção",
      ],
    },
  ];

  const caes = [
    {
      id: 1,
      nome: "Toby",
      imagem: dog1,
      padrinhos: 3,
      descricao: "Toby espera por mais padrinhos para uma vida melhor.",
    },
    {
      id: 2,
      nome: "Mel",
      imagem: dog2,
      padrinhos: 5,
      descricao: "Mel adora receber carinho e está precisando de ajuda.",
    },
    {
      id: 3,
      nome: "Thor",
      imagem: dog3,
      padrinhos: 2,
      descricao: "Thor é super brincalhão e precisa do seu apoio!",
    },
    {
  id: 4,
  nome: "Apolo",
  imagem: dog4,
  padrinhos: 1,
  descricao: "Apolo é forte e dócil — sonha com um padrinho para chamar de amigo!",
},
    {
  id: 5,
  nome: "Nina",
  imagem: dog5,
  padrinhos: 2,
  descricao: "Nina é esperta e adora correr! Seu carinho pode transformar a vida dela.",
},
   {
  id: 6,
  nome: "Zeca",
  imagem: dog6,
  padrinhos: 0,
  descricao: "Zeca é um amigão tranquilo que só precisa de uma chance e muito amor.",
},

  ];

  const enviarFormulario = (e) => {
    e.preventDefault();
    alert("Mensagem enviada!");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <main className="flex-fill">
        {/* Seção principal */}
        <section className="py-5 text-center bg-warning-subtle">
          <div className="container">
            <Heart size={64} color="#ff7b00" fill="#ff7b00" className="mb-3" />
            <h1 className="fw-bold mb-3">Seja um Padrinho</h1>
            <p className="lead text-muted">
              Não pode adotar, mas quer ajudar? Apadrinhe um pet e faça a
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
                  icone: <Heart color="#ff7b00" />,
                  titulo: "1. Escolha um Pet",
                  texto: "Selecione o pet que você quer apadrinhar.",
                },
                {
                  icone: <DollarSign color="#ff7b00" />,
                  titulo: "2. Escolha o Plano",
                  texto: "Defina o valor da sua contribuição mensal.",
                },
                {
                  icone: <Calendar color="#ff7b00" />,
                  titulo: "3. Acompanhe",
                  texto: "Receba fotos e atualizações mensais.",
                },
                {
                  icone: <Gift color="#ff7b00" />,
                  titulo: "4. Visite",
                  texto: "Agende visitas e acompanhe o progresso.",
                },
              ].map((item, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="p-4 border rounded bg-white h-100 shadow-sm">
                    <div className="mb-3">{item.icone}</div>
                    <h5 className="fw-bold">{item.titulo}</h5>
                    <p className="text-muted small">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="section-title">Planos de Apadrinhamento</h2>
            <p className="section-subtitle">
              Escolha o plano que melhor se encaixa na sua realidade. Qualquer
              contribuição faz a diferença!
            </p>
            <div className="row g-4 justify-content-center">
              {planos.map((plano) => (
                <div key={plano.id} className="col-md-4">
                  <div
                    className={`card plan-card border-2 position-relative ${
                      plano.destaque ? "shadow" : ""
                    }`}
                  >
                    {plano.destaque && (
                      <span className="badge badge-popular position-absolute top-0 start-50 translate-middle mt-3">
                        Mais Popular
                      </span>
                    )}
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{plano.nome}</h5>
                      <h3 className="fw-bold" style={{ color: "#ff7b00" }}>
                        {plano.preco}
                        <small className="text-muted fs-6"> {plano.periodo}</small>
                      </h3>
                      <ul className="list-unstyled mt-3 mb-4">
                        {plano.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="text-start">
                            <Heart size={16} color="#ff7b00" className="me-2" />
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                      <button
                        className="btn w-100"
                        style={{
                          backgroundColor: "#ff7b00",
                          color: "#fff",
                          border: "none",
                        }}
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
            <h2 className="section-title">Pets Aguardando Padrinhos</h2>
            <p className="section-subtitle">
              Conheça alguns pets que precisam do seu apoio
            </p>
            <div className="row g-4 justify-content-center">
              {caes.map((cao) => (
                <div key={cao.id} className="col-md-4">
                  <div className="card pet-card shadow-sm">
                    <img src={cao.imagem} alt={cao.nome} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{cao.nome}</h5>
                      <p className="text-muted small">{cao.descricao}</p>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <Heart size={16} color="#ff7b00" className="me-1" />
                        <span className="text-muted small">
                          {cao.padrinhos}{" "}
                          {cao.padrinhos === 1 ? "padrinho" : "padrinhos"}
                        </span>
                      </div>
                      <button
                        className="btn w-100"
                        style={{
                          backgroundColor: "#ff7b00",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        Apadrinhar {cao.nome}
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
                  <form onSubmit={enviarFormulario}>
                    <div className="mb-3">
                      <label htmlFor="nome" className="form-label">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome"
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
                      <label htmlFor="telefone" className="form-label">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefone"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mensagem" className="form-label">
                        Mensagem
                      </label>
                      <textarea
                        className="form-control"
                        id="mensagem"
                        rows="5"
                        placeholder="Conte-nos como você quer ajudar..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn w-100"
                      style={{
                        backgroundColor: "#ff7b00",
                        color: "#fff",
                        border: "none",
                      }}
                    >
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