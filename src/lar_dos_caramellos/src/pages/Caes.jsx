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

  // Filtros
  const [filtros, setFiltros] = useState({
    idade: "",
    porte: "",
    localizacao: "",
  });

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

  // Dados iniciais
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

  // Preenchimento do formulário
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if ((name === "foto" || name === "doadorFoto") && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setNovoCao((prev) => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNovoCao((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Cadastrar cão
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

  // FILTRO atualizado para aceitar texto digitado
  const caesFiltrados = caes.filter((cao) => {
    const idadeMatch =
      filtros.idade === "" ||
      (filtros.idade === "Filhote" && cao.idade.toLowerCase().includes("filhote")) ||
      (filtros.idade === "Adulto" && cao.idade.toLowerCase().includes("adulto")) ||
      (filtros.idade === "Idoso" && cao.idade.toLowerCase().includes("idoso"));

    const porteMatch = filtros.porte === "" || cao.porte === filtros.porte;

    const localMatch =
      filtros.localizacao === "" ||
      cao.localizacao.toLowerCase().includes(filtros.localizacao.toLowerCase());

    return idadeMatch && porteMatch && localMatch;
  });

  const limparFiltros = () =>
    setFiltros({ idade: "", porte: "", localizacao: "" });

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Cabeçalho */}
      <section className="py-5 text-center" style={{ backgroundColor: "#fff3cd" }}>
        <div className="container">
          <h1 className="fw-bold display-6">Encontre seu novo melhor amigo 🐾</h1>
          <p className="lead mb-4">Veja os cães disponíveis para adoção ou cadastre um novo peludo!</p>
          <button
            className="btn btn-lg text-white fw-bold"
            style={{ backgroundColor: "#ff7b00", border: "none" }}
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            {mostrarFormulario ? "Fechar cadastro" : "Cadastrar Cão para Adoção"}
          </button>
        </div>
      </section>

      {/* FORMULÁRIO */}
      {mostrarFormulario && (
        <section className="py-4 bg-light border-bottom">
          <div className="container">
            <h3 className="fw-bold mb-4">Cadastrar Novo Cão</h3>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">

                {/* Nome */}
                <div className="col-md-6">
                  <label className="form-label">Nome do cão</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    value={novoCao.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Idade */}
                <div className="col-md-6">
                  <label className="form-label">Idade</label>
                  <input
                    type="text"
                    name="idade"
                    className="form-control"
                    value={novoCao.idade}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Porte */}
                <div className="col-md-6">
                  <label className="form-label">Porte</label>
                  <select
                    name="porte"
                    className="form-select"
                    value={novoCao.porte}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>

                {/* LOCALIZAÇÃO - AGORA DIGITÁVEL */}
                <div className="col-md-6">
                  <label className="form-label">Localização</label>
                  <input
                    type="text"
                    name="localizacao"
                    className="form-control"
                    placeholder="Ex: Contagem, MG"
                    value={novoCao.localizacao}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Foto */}
                <div className="col-md-12">
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

                <hr className="mt-4" />
                <h5 className="fw-bold">Informações do Doador</h5>

                <div className="col-md-4">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    name="doadorNome"
                    className="form-control"
                    value={novoCao.doadorNome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Telefone</label>
                  <input
                    type="text"
                    name="doadorTelefone"
                    className="form-control"
                    value={novoCao.doadorTelefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="doadorEmail"
                    className="form-control"
                    value={novoCao.doadorEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Foto do doador */}
                <div className="col-md-12">
                  <label className="form-label">Foto do doador</label>
                  <input
                    type="file"
                    name="doadorFoto"
                    className="form-control"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <button
                    className="btn mt-3 text-white fw-bold"
                    style={{ backgroundColor: "#ff7b00", border: "none" }}
                    type="submit"
                  >
                    Salvar Cão
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* FILTROS */}
      <section className="bg-light py-3 border-bottom">
        <div className="container">
          <h5 className="fw-bold mb-3">Filtrar cães</h5>
          <div className="row g-3 align-items-end">
            
            {/* Idade */}
            <div className="col-md-4">
              <label className="form-label">Idade</label>
              <select
                className="form-select"
                value={filtros.idade}
                onChange={(e) => setFiltros({ ...filtros, idade: e.target.value })}
              >
                <option value="">Todas</option>
                <option value="Filhote">Filhote (até 1 ano)</option>
                <option value="Adulto">Adulto (1 a 7 anos)</option>
                <option value="Idoso">Idoso (acima de 7 anos)</option>
              </select>
            </div>

            {/* Porte */}
            <div className="col-md-4">
              <label className="form-label">Porte</label>
              <select
                className="form-select"
                value={filtros.porte}
                onChange={(e) => setFiltros({ ...filtros, porte: e.target.value })}
              >
                <option value="">Todos</option>
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </select>
            </div>

            {/* LOCALIZAÇÃO — AGORA DIGITÁVEL */}
            <div className="col-md-4">
              <label className="form-label">Localização</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite a cidade"
                value={filtros.localizacao}
                onChange={(e) =>
                  setFiltros({ ...filtros, localizacao: e.target.value })
                }
              />
            </div>

            <div className="col-12 mt-3">
              <button
                className="btn text-white fw-bold"
                style={{ backgroundColor: "#ff7b00", border: "none" }}
                onClick={limparFiltros}
              >
                Limpar filtros
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de cães */}
      <section className="py-5 flex-grow-1">
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">Cães disponíveis para Adoção</h2>
          <div className="row">
            {caesFiltrados.length > 0 ? (
              caesFiltrados.map((cao) => (
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
              ))
            ) : (
              <p className="text-center text-muted">
                Nenhum cão encontrado com os filtros selecionados.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {mostrarModal && doadorSelecionado && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
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
