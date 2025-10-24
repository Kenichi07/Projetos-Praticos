export class Personagem {
  nome;
  vida;
  mana;
  tipo;
  level;
  descricao;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;
    this.vida = 100;
    this.mana = 100;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacavel ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }
}
