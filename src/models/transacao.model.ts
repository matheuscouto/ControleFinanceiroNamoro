export class Transacao {
  public autor: string;
  public nome: string;
  public tdate: string;
  public valor: number;
  public categoria: string;

  constructor(autor: string, valor: number, nome: string, tdate: string, categoria: string){
    this.autor = autor;
    this.nome = nome;
    this.tdate = tdate;
    this.valor = valor;
    this.categoria = categoria;

  }
}
