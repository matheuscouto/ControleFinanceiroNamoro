export class UserModel {
  public nome: string;
  public valor: number;

  constructor(valor: number, nome: string){
    this.nome = nome;
    this.valor = valor;
  }
}
