const mesages = [
    "Oscar",
    "Ana",
    "Sebas",
    "Juan",
    "Laura",
    "Carolina",
    "Pedro",
    "Freddy",
    "Dani",
    "Felipe"
];

const randomMsg = () => {
    const mesage = mesages[Math.floor(Math.random() * mesages.length)];
    console.log(mesage);
};

module.exports = { randomMsg };