import { Usuario } from './Usuario.js';

export class Auth {
    constructor() {
        // Simulando um usuário cadastrado no sistema
        this.usuarios = [
            new Usuario('admin', '12345'),
            new Usuario('user', 'senha123')
        ];
    }

    // Método para autenticar o usuário com base no nome de usuário e senha fornecidos
    login(username, password) {
        const usuario = this.usuarios.find(user => user.username === username);

        if (usuario) {
            return usuario.autenticar(password);
        }

        return false;
    }
}
