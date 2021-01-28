class Persona {
  static _conteo = 0;

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida;
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  miFrase() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo} .`);
  }
}

class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Los Avengers";
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino Spiderman"
);

console.log(spiderman);
spiderman.miFrase();
