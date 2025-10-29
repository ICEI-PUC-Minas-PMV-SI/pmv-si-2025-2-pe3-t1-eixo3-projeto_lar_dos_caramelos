import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Atualiza os valores do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Validação básica dos campos
  const validateForm = () => {
    if (!form.nome || !form.email || !form.cpf || !form.telefone || !form.senha || !form.confirmarSenha) {
      setError("Por favor, preencha todos os campos.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Por favor, insira um e-mail válido.");
      return false;
    }
    if (form.senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }
    if (form.senha !== form.confirmarSenha) {
      setError("As senhas não coincidem.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess("Cadastro realizado com sucesso!");
        setForm({
          nome: "",
          email: "",
          cpf: "",
          telefone: "",
          senha: "",
          confirmarSenha: "",
        });

        // Redireciona após 1 segundo
        setTimeout(() => navigate("/caes"), 1000);
      } else {
        setError("Erro ao cadastrar usuário. Tente novamente.");
      }
    } catch (err) {
      setError("Erro de conexão com o servidor.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-3"
      style={{
        background: "linear-gradient(135deg, rgba(255,165,0,0.15), rgba(255,200,100,0.25))",
      }}
    >
      <div className="w-100" style={{ maxWidth: "420px" }}>
        {/* Logo */}
        <div className="text-center mb-4">
          <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none">
            <Heart size={36} color="orange" fill="orange" />
            <span className="fs-3 fw-bold text-dark">Amigo de Pata</span>
          </Link>
        </div>

        {/* Card */}
        <div className="card shadow border-0">
          <div className="card-header bg-white text-center border-0 pt-4">
            <h4 className="fw-bold mb-1">Criar Conta</h4>
            <p className="text-secondary mb-0">Crie sua conta para adotar um amigo</p>
          </div>

          <div className="card-body px-4 pb-4">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label fw-semibold">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cpf" className="form-label fw-semibold">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  placeholder="000.000.000-00"
                  value={form.cpf}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefone" className="form-label fw-semibold">
                  Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="senha" className="form-label fw-semibold">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="••••••••"
                  value={form.senha}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmarSenha" className="form-label fw-semibold">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmarSenha"
                  placeholder="••••••••"
                  value={form.confirmarSenha}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
                Criar Conta
              </button>
            </form>
          </div>

          <div className="card-footer bg-white border-0 text-center pb-4">
            <p className="text-secondary small mb-0">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-decoration-none text-primary fw-semibold">
                Entrar
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

export default Register;
