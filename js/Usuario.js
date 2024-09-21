
export class Usuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    
    autenticar(senha) {
        return this.password === senha;
    }
}
