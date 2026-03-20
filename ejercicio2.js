//EJERCICIO #2

class Contenido {

    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return `${this.titulo} | ${this.genero} | ${this.anio}`;
    }

    retirar() {
        this.disponible = false;
        return `${this.titulo} ha sido retirado del catálogo.`;
    }

    estado() {
        return this.disponible
            ? `${this.titulo} está disponible`
            : `${this.titulo} está retirado`;
    }
}

class Pelicula extends Contenido {

    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }

    ficha() {
        return `${super.ficha()} | Duración: ${this.duracionFormateada()}`;
    }
}

class Serie extends Contenido {

    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `${super.ficha()} | Temporadas: ${this.temporadas} | Episodios totales: ${this.totalEpisodios()}`;
    }
}

const peli1 = new Pelicula("Inception", "Sci-Fi", 2010, 148);
const peli2 = new Pelicula("Coco", "Animación", 2017, 105);

const serie1 = new Serie("Stranger Things", "Sci-Fi", 2016, 4);
serie1.registrarEpisodios(9);

const serie2 = new Serie("Dark", "Misterio", 2017, 3);
serie2.registrarEpisodios(10);

console.log(peli1.ficha());
console.log(peli2.ficha());
console.log(serie1.ficha());
console.log(serie2.ficha());

console.log(peli2.retirar());
console.log(peli2.estado());

const peli3 = new Pelicula("Avatar", "Acción", 2009, 162);

const serie3 = new Serie("Breaking Bad", "Drama", 2008, 5);
serie3.registrarEpisodios(13);

const catalogo = [
    peli1,
    peli2,
    peli3,
    serie1,
    serie2,
    serie3
];

console.log("\n CATÁLOGO ");
for (let contenido of catalogo) {
    console.log(contenido.ficha());
}

peli1.retirar();
serie2.retirar();

console.log(peli1.estado());
console.log(serie2.estado());

let disponibles = 0;

for (let contenido of catalogo) {
    if (contenido.disponible === true) {
        disponibles++;
    }
}

console.log("Contenidos disponibles:", disponibles);