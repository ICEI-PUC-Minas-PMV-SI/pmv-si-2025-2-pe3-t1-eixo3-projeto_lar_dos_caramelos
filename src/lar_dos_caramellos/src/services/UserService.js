
export async function getLoggedUser() {
    try {
        const response = await fetch('http://localhost:5000/users?logado=true');
        if (!response.ok) {
            throw new Error('Erro ao buscar usuário');
        }
        const users = await response.json();
        return users[0] || null;
    } catch (error) {
        console.error('Erro ao buscar usuário logado:', error);
        // Fallback para localStorage
        const userLocal = localStorage.getItem('user');
        return userLocal ? JSON.parse(userLocal) : null;
    }
}