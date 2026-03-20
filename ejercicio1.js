class Empleado {

    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }


    presentarse() {
        return `Hola, soy ${this.nombre} y trabajo como ${this.cargo}.`;
    }
    

    calcularSalarioAnual() {
        return this.salario * 12;
    }

    desactivar() {
        this.activo = false;
        return `${this.nombre} ha sido desactivado.`;
    }

    info() {
        return `Nombre: ${this.nombre} | Cargo: ${this.cargo} | Salario: $${this.salario} | Activo: ${this.activo}`;
    }
}

const emp1 = new Empleado("Ana", "Desarrolladora", 3000);
const emp2 = new Empleado("Luis", "QA Tester", 2500);
const emp3 = new Empleado("Carlos", "Diseñador UX", 2800);

console.log(emp1.presentarse());
console.log(emp1.calcularSalarioAnual());
console.log(emp1.info());

console.log(emp2.presentarse());
console.log(emp2.calcularSalarioAnual());
console.log(emp2.info());

console.log(emp3.presentarse());
console.log(emp3.calcularSalarioAnual());
console.log(emp3.info());

console.log(emp2.desactivar());
console.log(emp2.info());

class Lider extends Empleado {

    constructor(nombre, salario, equipo) {
        super(nombre, "Lider de equipo", salario);
        this.equipo = equipo;
    }

    presentarEquipo() {
        return `Mi equipo está formado por: ${this.equipo.join(", ")}`;
    }

    agregarMiembro(nombre) {
        this.equipo.push(nombre);
        return `${nombre} fue agregado al equipo.`;
    }

    info() {
        return `${super.info()} | Personas en equipo: ${this.equipo.length}`;
    }
}

const lider1 = new Lider("María", 4500, ["Ana", "Luis"]);
const lider2 = new Lider("Pedro", 4700, ["Carlos"]);

console.log(lider1.calcularSalarioAnual());
console.log(lider1.desactivar());

console.log(lider1.agregarMiembro("Sofia"));
console.log(lider1.presentarEquipo());

const e1 = new Empleado("Juan", "Backend Dev", 3200);
const e2 = new Empleado("Laura", "Frontend Dev", 3100);
const e3 = new Empleado("Mateo", "Soporte", 2000);
const e4 = new Empleado("Elena", "Analista", 2900);

const l1 = new Lider("Andrés", 5000, ["Juan", "Laura"]);
const l2 = new Lider("Camila", 5200, ["Mateo", "Elena"]);

const empleados = [e1, e2, e3, e4, l1, l2];

let costoMensual = 0;

for (let emp of empleados) {
    costoMensual += emp.salario;
}

console.log("Costo mensual nómina:", costoMensual);

console.log("Costo anual nómina:", costoMensual * 12);

e3.desactivar();
console.log(e3.info());

console.log(l1.info());
console.log(l1.presentarEquipo());

console.log(l2.info());
console.log(l2.presentarEquipo());