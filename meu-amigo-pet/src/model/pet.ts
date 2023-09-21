export class Pet {
  public id: number;
  public nome_pet: string;
  public tipo: string;
  public raca: string;
  public local_encontrado: string;
  public descricao: string;
  public cuidado_especial: string;
  public idade_aparente: string;

  constructor(id: number, nome_pet: string, tipo: string, raca: string, local_encontrado: string, descricao: string, cuidado_especial: string, idade_aparente: string) {
    this.id = id;
    this.nome_pet = nome_pet;
    this.tipo = tipo;
    this.raca = raca;
    this.local_encontrado = local_encontrado;
    this.descricao = descricao;
    this.cuidado_especial = cuidado_especial;
    this.idade_aparente = idade_aparente;
  }
}
