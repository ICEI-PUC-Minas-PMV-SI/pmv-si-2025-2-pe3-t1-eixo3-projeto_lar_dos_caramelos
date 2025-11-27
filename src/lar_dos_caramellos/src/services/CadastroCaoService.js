export default async function RegisterCao(cao) {
    try {
        const response = await fetch('http://localhost:5002/caes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cao)      
        });
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Cão cadastrado com sucesso no JSON Server");
        
        // ✅ Apenas salva IDs e textos no localStorage, NÃO imagens
        const caoResumido = {
            id: data.id,
            nome: data.nome,
            idade: data.idade,
            porte: data.porte,
            localizacao: data.localizacao,
            usuarioId: data.usuarioId,
            // ❌ Não salva: foto, usuario.foto, etc.
        };
        
        const caesLocais = JSON.parse(localStorage.getItem('caes_resumido') || '[]');
        const novosCaes = caesLocais.filter(c => c.id !== caoResumido.id);
        novosCaes.push(caoResumido);
        localStorage.setItem('caes_resumido', JSON.stringify(novosCaes));
        
        return data;
    }
    catch(error) {
        console.error('Erro ao registrar o cão:', error);
        throw error; // Apenas propaga o erro
    }
}