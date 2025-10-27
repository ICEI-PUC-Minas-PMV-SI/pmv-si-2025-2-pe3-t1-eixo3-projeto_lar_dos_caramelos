import React from "react";
import Footer from "../components/FooterComponent";
import {
  Heart,
  Home,
  Utensils,
  Activity,
  BookOpen,
  Stethoscope,
  Shield,
} from "lucide-react";

function DicasPetsPage() {
  const petTips = [
    {
      icon: <Home size={28} color="#000000ff" />, // Vermelho Bootstrap
      title: "Adaptação ao Novo Lar",
      description:
        "Dê tempo ao seu novo amigo para se adaptar. Prepare um espaço confortável e seguro antes da chegada.",
      details:
        "Nos primeiros dias, mantenha uma rotina consistente e evite mudanças bruscas. Permita que o pet explore a casa gradualmente.",
    },
    {
      icon: <Utensils size={28} color="#000000ff" />,
      title: "Alimentação Balanceada",
      description:
        "Consulte um veterinário para definir a dieta ideal. Água fresca deve estar sempre disponível.",
      details:
        "Estabeleça horários fixos para as refeições e evite dar comida humana, que pode ser prejudicial à saúde do pet.",
    },
    {
      icon: <Activity size={28} color="#000000ff" />,
      title: "Exercícios Diários",
      description:
        "Passeios regulares são essenciais para a saúde física e mental do seu pet.",
      details:
        "A quantidade de exercício varia conforme a raça e idade. Cães ativos podem precisar de até 2 horas de atividade diária.",
    },
    {
      icon: <BookOpen size={28} color="#000000ff" />,
      title: "Treinamento e Socialização",
      description:
        "Invista tempo em treinamento básico e socialização desde cedo para um pet equilibrado.",
      details:
        "Use reforço positivo e seja paciente. A socialização deve começar cedo, mas pode ser feita em qualquer idade.",
    },
    {
      icon: <Stethoscope size={28} color="#000000ff" />,
      title: "Cuidados Veterinários",
      description:
        "Mantenha as vacinas em dia e faça check-ups regulares para prevenir problemas de saúde.",
      details:
        "Consultas anuais são essenciais, além de manter o controle de parasitas e vacinas atualizadas.",
    },
    {
      icon: <Shield size={28} color="#000000ff" />,
      title: "Higiene e Limpeza",
      description:
        "Banhos regulares, escovação e cuidados com unhas e dentes são fundamentais.",
      details:
        "A frequência de banhos depende da raça. Escove os dentes do pet regularmente para prevenir doenças.",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section
          className="text-center py-5"
          style={{ backgroundColor: "#f4f0dd" }}
        >
          <div className="container">
            <Heart
              className="me-2"
              size={60}
              color="#ff9900ff"
              fill="#ff9900ff"
            />
            <h1 className="fw-bold display-5 mb-3">
              Dicas para Cuidar do Seu Pet
            </h1>
            <p className="text-muted fs-5">
              Tudo o que você precisa saber para garantir o bem-estar e
              felicidade do seu amigo de quatro patas.
            </p>
          </div>
        </section>

        {/* Pet Tips Section */}
        <section className="py-5" style={{ backgroundColor: "#f4f0dd" }}>
          <div className="container">
            <h2 className="text-center fw-bold mb-4">
              Guia Completo de Cuidados
            </h2>
            <p className="text-center text-muted mb-5">
              Seguir essas dicas garantirá uma vida longa, saudável e feliz para
              seu pet.
            </p>

            <div className="row g-4">
              {petTips.map((tip, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                      <div
                        className="d-inline-flex justify-content-center align-items-center mb-3"
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          backgroundColor: "#f9cc8aff"
                        }}
                      >
                        {tip.icon}
                      </div>
                      <h5 className="card-title fw-bold">{tip.title}</h5>
                      <p className="card-text text-muted mb-2">
                        {tip.description}
                      </p>
                      <p className="card-text small text-secondary">
                        {tip.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-light text-center">
          <div className="container">
            <h2 className="fw-bold mb-3">Pronto para Adotar?</h2>
            <p className="text-muted mb-4 fs-5">
              Agora que você conhece as melhores práticas, conheça os cães
              disponíveis para adoção e encontre seu novo companheiro.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <a
                href="/caes"
                className="btn text-white px-4 py-2 fw-semibold"
                style={{backgroundColor:"orange"}}
              >
                Ver Cães Disponíveis
              </a>
              <a
                href="/historias"
                className="btn btn-outline-secondary px-4 py-2 fw-semibold"
              >
                Histórias de Sucesso
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DicasPetsPage;
