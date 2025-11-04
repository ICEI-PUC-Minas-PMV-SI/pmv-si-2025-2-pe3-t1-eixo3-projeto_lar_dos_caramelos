import React, { useState, useEffect } from "react";
import FooterComponent from "../components/FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";

import dog1 from "../assets/Cao adotar 1.png";
import dog2 from "../assets/Cao adotar 2.png";
import dog3 from "../assets/Cao adotar 3.png";
import dog4 from "../assets/Cao adotar 4.png";
import dog5 from "../assets/Cao adotar 5.png";
import dog6 from "../assets/Cao adotar 6.png";  

const Caes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [caes, setCaes] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [doadorSelecionado, setDoadorSelecionado] = useState(null);

  const [novoCao, setNovoCao] = useState({
    nome: "",
    idade: "",
    porte: "",
    localizacao: "",
    foto: "",
    doadorNome: "",
    doadorTelefone: "",
    doadorEmail: "",
    doadorFoto: "",
  });

  // 🐶 Dados iniciais (6 cães)
  const caesIniciais = [
    {
      id: 1,
      nome: "Mel",
      idade: "Filhote (6 meses)",
      porte: "Pequeno",
      localizacao: "Contagem, MG",
      foto: dog1,
      doador: {
        nome: "João",
        telefone: "(31) 91234-5678",
        email: "joao@email.com",
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    },
    {
      id: 2,
      nome: "Thor",
      idade: "Adulto (3 anos)",
      porte: "Grande",
      localizacao: "Betim, MG",
      foto: dog2,
      doador: {
        nome: "Maria",
        telefone: "(31) 98765-4321",
        email: "maria@email.com",
        foto: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    },
    {
      id: 3,
      nome: "Luna",
      idade: "Filhote (8 meses)",
      porte: "Médio",
      localizacao: "Belo Horizonte, MG",
      foto: dog3,
      doador: {
        nome: "Carlos",
        telefone: "(31) 99876-5432",
        email: "carlos@email.com",
        foto: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    },
    {
      id: 4,
      nome: "Pipoca",
      idade: "Adulto (5 anos)",
      porte: "Médio",
      localizacao: "Contagem, MG",
      foto: dog4,
      doador: {
        nome: "Ana",
        telefone: "(31) 91111-2222",
        email: "ana@email.com",
        foto: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    },
    {
      id: 5,
      nome: "Negão",
      idade: "Adulto (8 anos)",
      porte: "Grande",
      localizacao: "Belo Horizonte, MG",
      foto: dog5,
      doador: {
        nome: "Paulo",
        telefone: "(31) 93333-4444",
        email: "paulo@email.com",
        foto: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    },
    {
      id: 6,
      nome: "Flocão",
      idade: "Adulto (9 anos)",
      porte: "Grande",
      localizacao: "Betim, MG",
      foto: dog6,
      doador: {
        nome: "Beatriz",
        telefone: "(31) 95555-6666",
        email: "beatriz@email.com",
        foto: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    },
  ];

  useEffect(() => {
    const armazenados = JSON.parse(localStorage.getItem("caes")) || [];
    setCaes([...caesIniciais, ...armazenados]);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if ((name === "foto" || name === "doadorFoto") && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setNovoCao((prev) => ({ ...prev, [name]: fileReader.result }));
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setNovoCao((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novo = {
      ...novoCao,
      id: Date.now(),
      doador: {
        nome: novoCao.doadorNome,
        telefone: novoCao.doadorTelefone,
        email: novoCao.doadorEmail,
        foto: novoCao.doadorFoto,
      },
    };
    const atualizado = [...caes, novo];
    setCaes(atualizado);
    localStorage.setItem("caes", JSON.stringify(atualizado));
    setNovoCao({
      nome: "",
      idade: "",
      porte: "",
      localizacao: "",
      foto: "",
      doadorNome: "",
      doadorTelefone: "",
      doadorEmail: "",
      doadorFoto: "",
    });
    setMostrarFormulario(false);
  };

  const handleAdotar = (cao) => {
    setDoadorSelecionado(cao.doador);
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setDoadorSelecionado(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Seção de título */}
      <section className="py-5 text-center" style={{ backgroundColor: "#fff3cd" }}>
        <div className="container">
          <h1 className="fw-bold display-6 text-dark">Encontre seu novo melhor amigo 🐾</h1>
          <p className="lead mb-4 text-dark">
            Veja os cães disponíveis para adoção ou cadastre um novo peludo!
          </p>
          <button
            className="btn btn-lg text-white fw-bold"
            style={{ backgroundColor: "#ff7b00", border: "none" }}
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            {mostrarFormulario ? "Fechar cadastro" : "Cadastrar Cão para Adoção"}
          </button>
        </div>
      </section>

      {/* Formulário de cadastro */}
      {mostrarFormulario && (
        <section className="py-4 bg-light border-bottom">
          <div className="container">
            <h2 className="mb-4 fw-bold">Cadastrar novo cão para adoção</h2>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* Campos do formulário */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    placeholder="Nome do cão"
                    value={novoCao.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label className="form-label">Idade</label>
                  <input
                    type="text"
                    name="idade"
                    className="form-control"
                    placeholder="Ex: Filhote (6 meses)"
                    value={novoCao.idade}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label className="form-label">Porte</label>
                  <select
                    name="porte"
                    className="form-select"
                    value={novoCao.porte}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
                <div className="col-md-6 col-lg-3">
                  <label className="form-label">Localização</label>
                  <input
                    type="text"
                    name="localizacao"
                    className="form-control"
                    placeholder="Cidade, Estado"
                    value={novoCao.localizacao}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-lg-4">
                  <label className="form-label">Foto do cão</label>
                  <input
                    type="file"
                    name="foto"
                    accept="image/*"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-lg-4">
                  <label className="form-label">Nome do Doador</label>
                  <input
                    type="text"
                    name="doadorNome"
                    className="form-control"
                    placeholder="Nome do anunciante"
                    value={novoCao.doadorNome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-lg-4">
                  <label className="form-label">Telefone</label>
                  <input
                    type="text"
                    name="doadorTelefone"
                    className="form-control"
                    placeholder="Telefone do anunciante"
                    value={novoCao.doadorTelefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-lg-6">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    name="doadorEmail"
                    className="form-control"
                    placeholder="E-mail do anunciante"
                    value={novoCao.doadorEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-lg-6">
                  <label className="form-label">Foto do Doador</label>
                  <input
                    type="file"
                    name="doadorFoto"
                    accept="image/*"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn mt-3"
                style={{ backgroundColor: "#ff7b00", color: "#fff", fontWeight: "bold", border: "none" }}
              >
                Salvar cadastro
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Lista de cães */}
      <section className="py-5 flex-grow-1">
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">Cães disponíveis para Adoção</h2>
          <div className="row">
            {caes.map((cao) => (
              <div key={cao.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src={cao.foto}
                    alt={cao.nome}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "600px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{cao.nome}</h5>
                    <p><strong>Idade:</strong> {cao.idade}</p>
                    <p><strong>Porte:</strong> {cao.porte}</p>
                    <p><strong>Localização:</strong> {cao.localizacao}</p>
                    <button
                      className="btn mt-auto"
                      style={{
                        backgroundColor: "#ff7b00",
                        color: "#fff",
                        fontWeight: "bold",
                        border: "none",
                      }}
                      onClick={() => handleAdotar(cao)}
                    >
                      Adotar {cao.nome}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal do Doador */}
      {mostrarModal && doadorSelecionado && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Informações do Doador</h5>
                <button type="button" className="btn-close" onClick={fecharModal}></button>
              </div>
              <div className="modal-body text-center">
                {doadorSelecionado.foto && (
                  <img
                    src={doadorSelecionado.foto}
                    alt={doadorSelecionado.nome}
                    className="rounded-circle mb-3"
                    width="120"
                    height="120"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <h5>{doadorSelecionado.nome}</h5>
                <p><strong>Telefone:</strong> {doadorSelecionado.telefone}</p>
                <p><strong>Email:</strong> {doadorSelecionado.email}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn"
                  style={{ backgroundColor: "#ff7b00", color: "#fff" }}
                  onClick={fecharModal}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterComponent />
    </div>
  );
};

export default Caes;
