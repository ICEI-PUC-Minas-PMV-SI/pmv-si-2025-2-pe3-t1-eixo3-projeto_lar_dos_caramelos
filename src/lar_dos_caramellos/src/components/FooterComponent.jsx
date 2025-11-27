import React, { useState } from "react";
import { Heart, Facebook, Instagram, Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
                <li className="mb-2"><Link to="/caes" className="text-secondary text-decoration-none hover-link small">Adotar um Cão</Link></li>
                <li className="mb-2"><Link to="/apadrinhar" className="text-secondary text-decoration-none hover-link small">Apadrinhar</Link></li>
                <li className="mb-2"><Link to="/eventos" className="text-secondary text-decoration-none hover-link small">Eventos</Link></li>
                <li className="mb-2"><Link to="/dicas" className="text-secondary text-decoration-none hover-link small">Dicas Pet</Link></li>
                <li className="mb-2"><Link to="/historias" className="text-secondary text-decoration-none hover-link small">Histórias de Adoção</Link></li>
              </ul>
            </div>

            {/* Ajuda / Contato */}
            <div className="col-6 col-md-3">
              <h5 className="fw-semibold text-dark mb-3">Ajuda</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button className="btn btn-link text-secondary text-decoration-none hover-link small p-0" onClick={() => setShowModal(true)}>
                    Contato
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-top mt-4 pt-3 text-center">
            <p className="text-secondary small mb-0">
              © {new Date().getFullYear()} Lar dos Caramelloss. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <style>{`
          .hover-link:hover {
            color: orange !important;
            transition: 0.3s;
          }
        `}</style>
      </footer>

      {/* Modal de Contato */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              <X size={22} />
            </button>

            <h4 className="mb-3 text-dark fw-semibold">Contato</h4>
            <p className="text-secondary small">Entre em contato conosco através do email:</p>
            <p className="fw-bold text-dark">lar_doscaramellos@outlook.com</p>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          width: 90%;
          max-width: 400px;
          position: relative;
          box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
          animation: fadeIn 0.25s ease;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Footer;