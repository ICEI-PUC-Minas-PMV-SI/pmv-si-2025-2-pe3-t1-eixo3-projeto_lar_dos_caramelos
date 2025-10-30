import React from "react";
import { Link } from "react-router-dom";
import cachorro from "../assets/cachorro.jpg";
import '../App.css'
import { Heart, Users, Home as HomeIcon, Award } from "lucide-react";
import Footer from "../components/FooterComponent";

// Placeholder Button e Card para manter estrutura
const Button = ({ children, className }) => (
  <button className={`btn ${className}`}>{children}</button>
);

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

// Props simuladas
const heroImage = "/hero.jpg";
const adoptionCount = 123;

const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      

      {/* Hero Section */}
     <section
  className="position-relative d-flex align-items-center justify-content-start"
  style={{ height: "600px" }}
>
  <img
    src={cachorro}
    alt="Cães felizes"
    className="w-100 h-100 position-absolute top-0 start-0"
    style={{ objectFit: "cover" }}
  />
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(to right, rgba(255,255,255,0.70), rgba(255,255,255,0.8), rgba(255,255,255,0.5))",
    }}
  />

  <div className="container position-relative text-start text-dark ps-4 ps-md-5">
    <div style={{ maxWidth: "600px" }}>
      <h1 className="display-4 fw-bold mb-4">
        Adote Amor. <br />
        Ganhe um Amigo <br />
        <span className="text-orange">para a Vida.</span>
      </h1>
      <p className="lead mb-4">
        Bem-vindo ao Lar dos caramellos, um espaço dedicado à adoção responsável de cães. Aqui você encontra companheiros leais esperando por um lar cheio de carinho.
      </p>
      <div className="d-flex flex-wrap justify-content-start gap-3">
      <Button className="btn-lg px-0">
  <Link
    to="/caes"
    className="text-white text-decoration-none d-inline-block px-4 py-2"
    style={{
      backgroundColor: "#ff7b00",
      borderRadius: "1rem", // para manter borda arredondada padrão btn
      fontWeight: "500",
    }}
  >
    Conheça os cães disponíveis
  </Link>
</Button>
      <Button className="btn-lg px-0">
  <Link
    to="/apadrinhar"
    className="text-dark text-decoration-none d-inline-block px-4 py-2"
    style={{
      backgroundColor: "#fff",  // fundo branco
      borderRadius: "1rem",  // borda arredondada padrão
      fontWeight: "500",
     
    }}
  >
    Apadrinhe um cão
  </Link>
</Button>
      </div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-5 bg-light">
  <div className="container">
    <div className="row text-center g-4 justify-content-center">
      <div className="col-md-3">
        <Card className="h-100">
          <CardContent className="py-4">
            <Heart className="text-orange mb-2" size={48} />
            <h3 className="display-6">{adoptionCount}</h3>
            <p className="text-secondary">Cães Adotados</p>
          </CardContent>
        </Card>
      </div>
      <div className="col-md-3">
        <Card className="h-100">
          <CardContent className="py-4">
            <Users className="text-orange mb-2" size={48} />
            <h3 className="display-6">89</h3>
            <p className="text-secondary">Cães Disponíveis</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>


      {/* Como Funciona Section */}
      <section className="py-5">
        <div className="container text-center mb-5">
          <h2 className="fw-bold mb-3">Como Funciona a Adoção</h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Um processo simples e transparente para conectar você ao seu novo melhor amigo
          </p>
        </div>

        <div className="container">
          <div className="row g-4 text-center">
            {[1, 2, 3].map((step) => (
              <div className="col-md-4"  key={step}>
                <Card className="h-100 border-0 shadow-lg">
                  <CardContent className="py-4">
                    <div className="mx-auto mb-3 rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: "64px", height: "64px" }}>
                      <span className="fw-bold text-orange fs-4">{step}</span>
                    </div>
                    <h3 className="fw-bold mb-2">
                      {step === 1 ? "Encontre seu Pet" : step === 2 ? "Contate o doador" : "Leve para Casa"}
                    </h3>
                    <p className="text-secondary">
                      {step === 1
                        ? "Navegue pelos perfis e use filtros para encontrar o cão ideal para sua família"
                        : step === 2
                        ? "Entre em contato com o doador para conhecer mais sobre o cão e combinar a adoção"
                        : "Complete o processo de adoção e leve seu novo amigo para casa com muito amor"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center" style={{ background: "linear-gradient(135deg, #ff7b00, #ff9a5c)" }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-3">Pronto para Mudar uma Vida?</h2>
          <p className="lead mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Milhares de cães estão esperando por um lar cheio de amor. Seja você a diferença na vida deles.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button className="btn-lg btn-light px-4 ">
              <Link to="/caes" className="text-dark text-decoration-none">Ver Cães Disponíveis</Link>
            </Button>
            <Button className="btn-lg btn-outline-orange px-4 border-white">
              <Link to="/historias" className="text-white text-decoration-none">Histórias de Sucesso</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
