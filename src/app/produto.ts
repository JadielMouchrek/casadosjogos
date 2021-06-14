export class Produto {
    nome: string | undefined;
    email: string | undefined;
    valor: number | undefined;
    fabricacao: Date | undefined;

constructor (nome: string | undefined, email: string | undefined, valor: number | undefined, fabricacao: Date | undefined){

    this.nome = nome;
    this.email = email;
    this.valor = valor;
    this.fabricacao = fabricacao;


}
}
