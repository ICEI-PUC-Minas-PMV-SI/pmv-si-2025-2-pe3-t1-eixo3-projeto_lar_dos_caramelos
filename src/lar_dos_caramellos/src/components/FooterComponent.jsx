import React from "react";
import { Heart, Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Logo e Descrição */}
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Heart size={28} color="orange" fill="orange" />
              <span className="fs-4 fw-bold text-dark">Lar dos Caramellos</span>
            </div>
            <p className="text-secondary small mb-3">
              Conectando corações e transformando vidas através da adoção responsável de cães.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary hover-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary hover-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary hover-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-6 col-md-3">
            <h5 className="fw-semibold text-dark mb-3">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/caes" className="text-secondary text-decoration-none hover-link small">
                  Adotar um Cão
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/apadrinhar" className="text-secondary text-decoration-none hover-link small">
                  Apadrinhar
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/eventos" className="text-secondary text-decoration-none hover-link small">
                  Eventos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/dicas" className="text-secondary text-decoration-none hover-link small">
                  Dicas Pet
                </Link>
              </li>
            </ul>
          </div>

          {/* Ajuda / Contato */}
          <div className="col-6 col-md-3">
            <h5 className="fw-semibold text-dark mb-3">Ajuda</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/denuncias" className="text-secondary text-decoration-none hover-link small">
                  Denunciar Maus Tratos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/historias" className="text-secondary text-decoration-none hover-link small">
                  Histórias de Adoção
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none hover-link small">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-top mt-4 pt-3 text-center">
          <p className="text-secondary small mb-0">
            © {new Date().getFullYear()} Lar dos Caramellos. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Estilo adicional */}
      <style>{`
        .hover-link:hover {
          color: orange !important;
          transition: color 0.3s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
