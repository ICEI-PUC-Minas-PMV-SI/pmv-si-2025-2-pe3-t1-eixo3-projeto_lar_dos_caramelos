import { useState, useEffect } from "react";
import CaoRegisterComponent from "../components/CaoRegisterComponent";
import FooterComponent from "../components/FooterComponent";

function Caes() {
  const [caes, setCaes] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [doadorSelecionado, setDoadorSelecionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Carregar cães do JSON Server ao iniciar
  useEffect(() => {
    carregarCaes();
  }, []);

  const carregarCaes = async () => {
    try {
      const response = await fetch('http://localhost:5002/caes');
      const data = await response.json();
      setCaes(data);

    } catch (error) {
      console.error('Erro ao carregar cães:', error);
      // Fallback para localStorage se necessário
      const localCaes = localStorage.getItem("caes");
      if (localCaes) {
        setCaes(JSON.parse(localCaes));
      }
    }
  };

  // Função para quando o cadastro é bem-sucedido
  const handleCadastroSucesso = () => {
    carregarCaes(); // Recarrega a lista de cães
    setMostrarFormulario(false);
  };

  // Função para adotar (modal do doador)
  const handleAdotar = (cao) => {
    setDoadorSelecionado(cao.usuario); // Agora usa o usuario do cao
    setMostrarModal(true);
  };

  return (
    <div>
      
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


      {/* Formulário de Cadastro */}
      {mostrarFormulario && (
        <CaoRegisterComponent 
          onClose={() => setMostrarFormulario(false)}
          onSuccess={handleCadastroSucesso}
        />
      )}

      {/* Lista de Cães */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {caes.length === 0 ? (
              <div className="col-12 text-center">
                <p>Nenhum cão cadastrado ainda.</p>
              </div>
            ) : (
              caes.map((cao) => (
                <div key={cao.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={cao.foto}
                      className="card-img-top"
                      alt={cao.nome}
                      style={{ height: "650px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{cao.nome}</h5>
                      <p className="card-text">
                        <strong>Idade:</strong> {cao.idade}<br />
                        <strong>Porte:</strong> {cao.porte}<br />
                        <strong>Localização:</strong> {cao.localizacao}
                      </p>
                      <div className="mt-auto">
                        <button
                        className="btn w-100 text-white fw-bold"
                        style={{ backgroundColor: "#ff7b00", border: "none" }}
                        onClick={() => handleAdotar(cao)}
                        >
                        Quero Adotar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal de Informações do Doador */}
      {mostrarModal && doadorSelecionado && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Informações para Contato</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setMostrarModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-3">
                  {doadorSelecionado.foto && (
                    <img
                      src={doadorSelecionado.foto}
                      alt={doadorSelecionado.nome}
                      className="rounded-circle mb-3"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  )}
                  <h6>{doadorSelecionado.nome}</h6>
                  <p className="text-muted">{doadorSelecionado.email}</p>
                </div>
                <div className="mb-3">
                  <p><strong>Nome:</strong> {doadorSelecionado.nome}</p>
                  <p><strong>Email:</strong> {doadorSelecionado.email}</p>
                  {doadorSelecionado.telefone && (
                    <p><strong>Telefone:</strong> {doadorSelecionado.telefone}</p>
                  )}
                </div>
                <div className="alert alert-info">
                  <small>
                    Entre em contato com o doador para combinar os detalhes da adoção.
                  </small>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMostrarModal(false)}
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
}

export default Caes;