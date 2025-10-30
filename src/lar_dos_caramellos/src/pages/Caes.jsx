import React, { useState, useEffect } from "react";
import FooterComponent from "../components/FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";

import dog1 from "../assets/Cao adotar 1.png";
import dog2 from "../assets/Cao adotar 2.png";
import dog3 from "../assets/Cao adotar 3.png";

const Caes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [caes, setCaes] = useState([]);
  const [novoCao, setNovoCao] = useState({
    nome: "",
    idade: "",
    porte: "",
    localizacao: "",
    foto: "",
  });

  const caesIniciais = [
    { id: 1, nome: "Mel", idade: "Filhote (6 meses)", porte: "Pequeno", localizacao: "São Paulo, SP", foto: dog1 },
    { id: 2, nome: "Thor", idade: "Adulto (3 anos)", porte: "Grande", localizacao: "Rio de Janeiro, RJ", foto: dog2 },
    { id: 3, nome: "Luna", idade: "Filhote (8 meses)", porte: "Médio", localizacao: "Belo Horizonte, MG", foto: dog3 },
  ];

  useEffect(() => {
    const armazenados = JSON.parse(localStorage.getItem("caes")) || [];
    setCaes([...caesIniciais, ...armazenados]);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto" && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setNovoCao((prev) => ({ ...prev, foto: fileReader.result }));
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setNovoCao((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novo = { ...novoCao, id: Date.now() };
    const atualizado = [...caes, novo];
    setCaes(atualizado);
    localStorage.setItem("caes", JSON.stringify(atualizado));

    setNovoCao({ nome: "", idade: "", porte: "", localizacao: "", foto: "" });
    setMostrarFormulario(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Seção de título com fundo #fff3cd */}
      <section className="py-5 text-center" style={{ backgroundColor: "#fff3cd" }}>
        <div className="container">
          <h1 className="fw-bold display-6 text-dark">Encontre seu novo melhor amigo 🐾</h1>
          <p className="lead mb-4 text-dark">
            Veja os cães disponíveis para adoção ou cadastre um novo peludo!
          </p>
          <button
            className="btn btn-lg text-white fw-bold"
            style={{
              backgroundColor: "#ff7b00",
              border: "none",
            }}
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
                  <label className="form-label">Foto</label>
                  <input
                    type="file"
                    name="foto"
                    accept="image/*"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
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
                    style={{ height: "700px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cao.nome}</h5>
                    <p className="card-text mb-1">
                      <strong>Idade:</strong> {cao.idade}
                    </p>
                    <p className="card-text mb-1">
                      <strong>Porte:</strong> {cao.porte}
                    </p>
                    <p className="card-text">
                      <strong>Localização:</strong> {cao.localizacao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default Caes;
