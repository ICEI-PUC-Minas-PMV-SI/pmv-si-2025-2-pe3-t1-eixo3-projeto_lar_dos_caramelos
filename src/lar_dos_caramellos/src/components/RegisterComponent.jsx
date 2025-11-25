import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterService from "../services/RegisterService";

export default function RegisterPage({ setUsuarioLogado }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  function Register(e) {
    e.preventDefault();

    RegisterService(user)
      .then((res) => {
        if (res && res.id) {
          // Cria objeto de login
          const loggedUser = {
            id: res.id,
            nome: user.name,
            email: user.email,
          };

          // Salva no localStorage
          localStorage.setItem("usuarioLogado", JSON.stringify(loggedUser));

          // Atualiza o estado da Navbar
          if (setUsuarioLogado) {
            setUsuarioLogado(loggedUser);
          }

          alert(`Conta criada com sucesso! Por favor realize o login, ${user.name}`);
        
          navigate("/login");
           window.location.reload(); 
        }
      })
      .catch((err) => {
        console.error("Erro ao registrar:", err);
        alert("Erro ao criar conta.");
      });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (
      user.name.length >= 3 &&
      user.email.includes("@") &&
      user.email.includes(".") &&
      user.password.length >= 6
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <form onSubmit={Register} className="p-4">

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          name="name"
          onInput={handleChange}
          value={user.name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">E-mail</label>
        <input
          name="email"
          onInput={handleChange}
          value={user.email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          onInput={handleChange}
          value={user.password}
          type="password"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-dark" disabled={buttonDisabled}>
        Submit
      </button>
    </form>
  );
}
