

export default function RegisterPage() {
  return (
    <> 
     <div className="d-flex align-items-center justify-content-center min-vh-100  bg-gradient p-3"   style={{ backgroundColor: "#fff5e6" }} >
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
            <h4 className="fw-bold mb-1">{isLogin ? "Entrar" : "Criar Conta"}</h4>
            <p className="text-secondary mb-0">
              {isLogin
                ? "Entre com sua conta para continuar"
                : "Crie sua conta para adotar um amigo"}
            </p>
          </div>

          <div className="card-body px-4 pb-4">
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Nome Completo
                </label>
                <input type="text" className="form-control" id="name" placeholder="Seu nome" />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                E-mail
              </label>
              <input type="email" className="form-control" id="email" placeholder="seu@email.com" />
            </div>
          
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Senha
              </label>
              <input type="password" className="form-control" id="password" placeholder="••••••••" />
            </div>
            

          
              <div className="text-end mb-3">
                <Link to="/recuperar-senha" className="text-decoration-none small text-primary">
                  Esqueci minha senha
                </Link>
              </div>

            <button type="button" className="btn btn-primary w-100 py-2 fw-semibold">
              Entrar
            </button>
          </div>

          <div className="card-footer bg-white border-0 text-center pb-4">
            <p className="text-secondary small mb-0">
              Não tem uma conta?
             <Link
             to="/register"
              >
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
           
    
    
    </>
  

);
}

