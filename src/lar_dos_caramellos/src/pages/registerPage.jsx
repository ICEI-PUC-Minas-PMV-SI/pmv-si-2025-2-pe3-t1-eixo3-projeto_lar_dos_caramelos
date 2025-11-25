import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = ({ setUsuarioLogado }) => {
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
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();

        // Salva o usuário logado no localStorage
        const loggedUser = {
          id: data.id,
          nome: form.nome,
          email: form.email,
        };
        localStorage.setItem("usuarioLogado", JSON.stringify(loggedUser));

        // Atualiza estado da Navbar
        if (setUsuarioLogado) setUsuarioLogado(loggedUser);

        setSuccess("Cadastro realizado com sucesso!");
        setForm({
          nome: "",
          email: "",
          cpf: "",
          telefone: "",
          senha: "",
          confirmarSenha: "",
        });

        // Redireciona para /caes
        navigate("/caes");
         window.location.reload(); 
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
            <span className="fs-3 fw-bold text-dark">Lar dos Caramellos</span>
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
              {["nome","email","cpf","telefone","senha","confirmarSenha"].map((field) => (
                <div className="mb-3" key={field}>
                  <label htmlFor={field} className="form-label fw-semibold">
                    {field === "nome" ? "Nome Completo" : field === "email" ? "E-mail" : field === "cpf" ? "CPF" : field === "telefone" ? "Telefone" : field === "senha" ? "Senha" : "Confirmar Senha"}
                  </label>
                  <input
                    type={field.includes("senha") ? "password" : "text"}
                    className="form-control"
                    id={field}
                    placeholder={field === "nome" ? "Seu nome" : field === "email" ? "seu@email.com" : field === "cpf" ? "000.000.000-00" : field === "telefone" ? "(00) 00000-0000" : "Senha"}
                    value={form[field]}
                    onChange={handleChange}
                  />
                </div>
              ))}

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
