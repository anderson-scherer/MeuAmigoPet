export class Usuario {
  public id: string;
  public nome: string;
  public telefone: string;
  public endereco: string;
  public email: string;
  public tipo: string;
  public data_criacao: string;
  public data_alteracao: string;

  constructor(id: string, nome: string, telefone: string, endereco: string, email: string, tipo: string, data_criacao: string, data_alteracao: string) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;
    this.tipo = tipo;
    this.data_criacao = data_criacao;
    this.data_alteracao = data_alteracao;
  }
}
