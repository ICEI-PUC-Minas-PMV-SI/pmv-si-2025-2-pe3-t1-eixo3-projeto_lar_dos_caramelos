import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Função para verificar o login no JSON Server
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/users`);
      const data = await response.json();

      if (data.length === 0) {
        setError("Usuário não encontrado.");
        return;
      }

      const user = data.find( 
        (u) => u.email === email && u.senha === password //valor como 'password vindo do form porem esta senha no DB'
      );
      
      if (user) {
        setError("");
        alert(`Bem-vindo(a), ${user.nome}!`);

        navigate("/home"); // redireciona pra página principal (ajuste se precisar)
      } else {
        setError("Senha incorreta.");
      }
    } 
    catch (err) {
      console.error("Erro ao conectar com o servidor:", err);
      setError("Erro ao conectar com o servidor. Verifique se o JSON Server está rodando.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient p-3"
      style={{ backgroundColor: "#fff5e6" }}
    >
      <div className="w-100" style={{ maxWidth: "420px" }}>
        {/* Logo */}
        <div className="text-center mb-4">
          <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none">
            <Heart size={36} color="orange" fill="orange" />
            <span className="fs-3 fw-bold text-dark">Lar dos Caramellos</span>
          </Link>
        </div>

        {/* Card */}
        <div className="card shadow border-0">
          <div className="card-header bg-white text-center border-0 pt-4">
            <h4 className="fw-bold mb-1">Entrar</h4>
            <p className="text-secondary mb-0">Entre com sua conta para continuar</p>
          </div>

          <div className="card-body px-4 pb-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Mensagem de erro */}
            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}

            <div className="text-end mb-3">
              <Link to="/recuperar-senha" className="text-decoration-none small text-primary">
                Esqueci minha senha
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-primary w-100 py-2 fw-semibold"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>

          <div className="card-footer bg-white border-0 text-center pb-4">
            <p className="text-secondary small mb-0">
              Não tem uma conta?
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-link p-0 text-primary fw-semibold text-decoration-none"
                >
                  Criar conta
                </button>
              </Link>
            </p>
          </div>
        </div>

        {/* Termos */}
        <p className="text-center text-secondary small mt-3">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="text-decoration-none text-primary">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-decoration-none text-primary">
            Política de Privacidade
          </a>
        </p>
      </div>

      {/* Estilo adicional */}
      <style>{`
        .bg-gradient {
          background: linear-gradient(135deg, rgba(255,165,0,0.15), rgba(255,200,100,0.25));
        }
        .btn-primary {
          background-color: orange;
          border-color: orange;
        }
        .btn-primary:hover {
          background-color: #ffae42;
          border-color: #ffae42;
        }
      `}</style>
    </div>
  );
};

export default Login;
