import { Auth } from './Auth.js';

const auth = new Auth();
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Função que lida com a submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o login é válido
    const loginValido = auth.login(username, password);

    if (loginValido) {
        // Redireciona ou exibe mensagem de sucesso
        errorMessage.textContent = 'Login realizado com sucesso!';
        errorMessage.style.color = 'green';
    } else {
        // Exibe mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.color = 'red';
    }
});
