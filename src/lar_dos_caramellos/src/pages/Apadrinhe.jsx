import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Heart, DollarSign, Calendar, Gift } from "lucide-react";
import Footer from "../components/FooterComponent";
import { Modal, Button } from "react-bootstrap";

import dog1 from "../assets/dog-1.png";
import dog2 from "../assets/dog-2.png";
import dog3 from "../assets/dog-3.png";
import dog4 from "../assets/dog-4.png";
import dog5 from "../assets/dog-5.png";
import dog6 from "../assets/dog-6.png"; 

const Apadrinhe = () => {
  const [caes, setCaes] = useState([
    { id: 1, nome: "Toby", imagem: dog1, padrinhos: 3, descricao: "Toby espera por mais padrinhos para uma vida melhor." },
    { id: 2, nome: "Mel", imagem: dog2, padrinhos: 5, descricao: "Mel adora receber carinho e está precisando de ajuda." },
    { id: 3, nome: "Thor", imagem: dog3, padrinhos: 2, descricao: "Thor é super brincalhão e precisa do seu apoio!" },
    { id: 4, nome: "Apolo", imagem: dog4, padrinhos: 1, descricao: "Apolo é dócil e sonha com um padrinho amigo!" },
    { id: 5, nome: "Nina", imagem: dog5, padrinhos: 2, descricao: "Nina é esperta e adora correr! Seu carinho pode transformar a vida dela." },
    { id: 6, nome: "Zeca", imagem: dog6, padrinhos: 0, descricao: "Zeca é um amigão tranquilo que só precisa de uma chance e amor." },
  ]);

  const planos = [
    { id: 1, nome: "Plano Básico", preco: "R$ 50/mês", beneficios: ["Alimentação adequada","Higiene e banhos","Foto mensal do pet","Certificado de padrinho"] },
    { id: 2, nome: "Plano Completo", preco: "R$ 100/mês", beneficios: ["Todos os benefícios do Básico","Atendimento veterinário","Vacinas e vermífugos","Visitas mensais","Vídeos do pet"] },
    { id: 3, nome: "Plano Premium", preco: "R$ 150/mês", beneficios: ["Todos os benefícios do Completo","Treinamento comportamental","Kit personalizado","Visitas semanais","Prioridade na adoção"] },
  ];

  const [showModal, setShowModal] = useState(false);
  const [caoSelecionado, setCaoSelecionado] = useState(null);
  const [recibo, setRecibo] = useState(null);

  const abrirModal = (cao) => {
    setCaoSelecionado(cao);
    setShowModal(true);
  };

  const escolherPlano = (plano) => {
    // Atualiza padrinhos
    setCaes((prev) =>
      prev.map((c) =>
        c.id === caoSelecionado.id ? { ...c, padrinhos: c.padrinhos + 1 } : c
      )
    );

    // Gera recibo
    setRecibo({
      cao: caoSelecionado.nome,
      plano: plano.nome,
      valor: plano.preco,
      data: new Date().toLocaleDateString()
    });

    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <main className="flex-fill">
        {/* Cabeçalho */}
        <section className="py-5 text-center bg-warning-subtle">
          <div className="container">
            <Heart size={64} color="#ff7b00" fill="#ff7b00" className="mb-3" />
            <h1 className="fw-bold mb-3">Seja um Padrinho</h1>
            <p className="lead text-muted">
              Não pode adotar, mas quer ajudar? Apadrinhe um pet e transforme vidas!
            </p>
          </div>
        </section>

        {/* Planos */}
        <section className="py-5 text-center bg-white border-bottom">
          <div className="container">
            <h2 className="fw-bold mb-4">Planos de Apadrinhamento</h2>
            <div className="row g-4 justify-content-center">
              {planos.map((plano) => (
                <div key={plano.id} className="col-12 col-md-4">
                  <div className="card shadow-sm h-100 border-warning border-3" style={{ borderRadius: "16px" }}>
                    <div className="card-body text-center">
                      <h5 className="fw-bold">{plano.nome}</h5>
                      <h3 className="fw-bold" style={{ color: "#ff7b00" }}>{plano.preco}</h3>
                      <ul className="list-unstyled mt-3 text-start">
                        {plano.beneficios.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cães */}
        <section className="py-5 bg-light border-top border-bottom">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Cães disponíveis para apadrinhamento</h2>
            <div className="row g-4 justify-content-center">
              {caes.map((cao) => (
                <div key={cao.id} className="col-12 col-md-4">
                  <div className="card shadow-sm h-100" style={{ borderRadius: "16px", overflow: "hidden", minHeight: "420px" }}>
                    <img src={cao.imagem} alt={cao.nome} className="card-img-top" style={{ height: "550px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="fw-bold">{cao.nome}</h5>
                        <p className="text-muted small">{cao.descricao}</p>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                          <Heart size={16} color="#ff7b00" className="me-1" />
                          <span className="text-muted small">{cao.padrinhos} {cao.padrinhos === 1 ? "padrinho" : "padrinhos"}</span>
                        </div>
                      </div>
                      <button className="btn mt-auto w-100" style={{ backgroundColor: "#ff7b00", color: "#fff", fontWeight: "bold" }} onClick={() => abrirModal(cao)}>
                        Apadrinhar {cao.nome}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal de escolha do plano */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Escolha um plano para {caoSelecionado?.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column gap-3">
              {planos.map((plano) => (
                <Button key={plano.id} variant="warning" onClick={() => escolherPlano(plano)}>
                  {plano.nome} - {plano.preco}
                </Button>
              ))}
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal de recibo */}
        <Modal show={!!recibo} onHide={() => setRecibo(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Recibo de Apadrinhamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {recibo && (
              <div className="text-center">
                <p><strong>Cão:</strong> {recibo.cao}</p>
                <p><strong>Plano:</strong> {recibo.plano}</p>
                <p><strong>Valor:</strong> {recibo.valor}</p>
                <p><strong>Data:</strong> {recibo.data}</p>
                <p>Obrigado por apadrinhar! 💖</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setRecibo(null)}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </main>
      <Footer />
    </div>
  );
};

export default Apadrinhe;