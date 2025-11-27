import { useState, useEffect } from "react";
import RegisterCao from "../services/CadastroCaoService";
import UploadImageService from "../services/UploadImageService";
import { getLoggedUser } from "../services/UserService";



const CaoRegisterComponent = ({ onClose, onSuccess }) => {
    const [novoCao, setNovoCao] = useState({
        nome: "",
        idade: "",
        porte: "",
        localizacao: "",
        foto: "",
        usuarioId: "",
        usuarioNome: ""
    });
    
    const [loading, setLoading] = useState(false);
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    // Buscar usuário logado ao montar o componente
    useEffect(() => {
        const fetchUsuarioLogado = async () => {
            const user = await getLoggedUser();
            if (user) {
                setUsuarioLogado(user);
                setNovoCao(prev => ({
                    ...prev,
                    usuarioId: user.id,
                    usuarioNome: user.nome
                }));
            }
        };
        fetchUsuarioLogado();
    }, []);

    // Manipular mudanças nos inputs
    const handleChange = async (e) => {
        const { name, value, files } = e.target;
        
        if ((name === "foto") && files && files.length > 0) {
            try {
                const base64 = await UploadImageService(files[0]);
                setNovoCao(prev => ({ ...prev, [name]: base64 }));
            } catch (error) {
                alert(error);
            }
        } else {
            setNovoCao(prev => ({ ...prev, [name]: value }));
        }
    };

    // Submeter formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!usuarioLogado) {
            alert("Usuário não está logado!");
            return;
        }

        setLoading(true);
        
        try {
            const caoData = {
                nome: novoCao.nome,
                idade: novoCao.idade,
                porte: novoCao.porte,
                localizacao: novoCao.localizacao,
                foto: novoCao.foto,
                usuarioId: usuarioLogado.id,
                usuarioNome: usuarioLogado.nome,
                // Inclui todos os dados do usuário para facilitar
                usuario: {
                    id: usuarioLogado.id,
                    nome: usuarioLogado.nome,
                    telefone: usuarioLogado.telefone,
                    email: usuarioLogado.email,
                    foto: usuarioLogado.foto
                }
            };

            console.log("Enviando dados:", caoData);
            const resultado = await RegisterCao(caoData);
            console.log("Resposta do servidor:", resultado);

            // Limpar formulário
            setNovoCao({
                nome: "",
                idade: "",
                porte: "",
                localizacao: "",
                foto: "",
                usuarioId: usuarioLogado.id,
                usuarioNome: usuarioLogado.nome
            });

            if (onSuccess) onSuccess(resultado);
            if (onClose) onClose();
            
            alert("Cão cadastrado com sucesso!");
            
        } catch (error) {
            alert("Erro ao cadastrar cão: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!usuarioLogado) {
        return <div>Carregando...</div>;
    }

    return (
        <section className="py-4 bg-light border-bottom">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold">Cadastrar Novo Cão</h3>
                    <button 
                        className="btn btn-secondary" 
                        onClick={onClose}
                        disabled={loading}
                    >
                        X
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        {/* Informações do Cão */}
                        <div className="col-md-6">
                            <label className="form-label">Nome do cão *</label>
                            <input
                                type="text"
                                name="nome"
                                className="form-control"
                                value={novoCao.nome}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Idade *</label>
                            <input
                                type="text"
                                name="idade"
                                className="form-control"
                                placeholder="Ex: 2 anos, 6 meses"
                                value={novoCao.idade}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Porte *</label>
                            <select
                                name="porte"
                                className="form-select"
                                value={novoCao.porte}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            >
                                <option value="">Selecione</option>
                                <option value="Pequeno">Pequeno</option>
                                <option value="Médio">Médio</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Localização *</label>
                            <input
                                type="text"
                                name="localizacao"
                                className="form-control"
                                placeholder="Ex: Contagem, MG"
                                value={novoCao.localizacao}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="col-md-12">
                            <label className="form-label">Foto do cão *</label>
                            <input
                                type="file"
                                name="foto"
                                accept="image/*"
                                className="form-control"
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                            {novoCao.foto && (
                                <div className="mt-2">
                                    <img 
                                        src={novoCao.foto} 
                                        alt="Preview" 
                                        style={{maxWidth: '200px', maxHeight: '200px'}}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Informações do Usuário Logado (somente leitura) */}
                        <hr className="mt-4" />
                        <h5 className="fw-bold">Dados do Responsável</h5>
                        
                        <div className="col-md-6">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                value={usuarioLogado.nome || "Não informado"}
                                disabled
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                value={usuarioLogado.email || "Não informado"}
                                disabled
                            />
                        </div>

                        {usuarioLogado.telefone && (
                            <div className="col-md-12">
                                <label className="form-label">Telefone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={usuarioLogado.telefone}
                                    disabled
                                />
                            </div>
                        )}

                        <div className="col-12">
                            <button
                                className="btn mt-3 text-white fw-bold"
                                style={{ backgroundColor: "#ff7b00", border: "none" }}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Cadastrando..." : "Salvar"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CaoRegisterComponent;