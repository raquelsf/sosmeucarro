export interface Usuario {
    _id: string;
    nome: string;
    email: string;
    senha: string;
    foto: string;
    ativo: boolean;
    dataCriacao: Date;
}
