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

const spideman = new Persona("Francisco París", "FPA", "Soy el administrador");
const superman = new Persona("Superman", "S");

console.log(superman);

spideman.miFrase();
spideman.setComidaFavorita = "Spagettis con tomate";
console.log(spideman.getComidaFavorita);
console.log("Conteo de personas", Persona._conteo);
