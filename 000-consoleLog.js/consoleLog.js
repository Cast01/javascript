// O console.log() função nos mostra o valor das coisas que colocarmos ali dentro desde que exista ou seja um valor válido.

console.log(
    "gabriel"
);

console.log(
    {
        one: 1,
    }
);

console.log([
    {
        car: "Toyota",
    },
    {
        car: "Ford",
    }
]);

const number = 2;
const listCar = [
    {
        name: "Toyota",
    },
    {
        name: "Ford",
    }
]
console.log(typeof number);

console.log(listCar.length)

console.log(listCar.map(car => car.name))