export class Cometario {
        nome: string;
        tipo: number = 1;
        genero: number = 1;
        datanascimento: Date | undefined;
        observacao: string ;
        inativo: boolean = false;
      

constructor (nome: string, observacao: string) {

        this.nome = nome;
        this.observacao = observacao;
    
    
    

}
}