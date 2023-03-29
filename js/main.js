let km = prompt("Inserisci il numero di chilometri che vuoi percorrere...");

let age = prompt("Inserisci la tua età...");

const pricePerKilometers = (0.21);

parseFloat (km);

parseInt (age);

parseFloat (pricePerKilometers);

let trainPrice = km * pricePerKilometers;

let minorsDiscount = (trainPrice - [trainPrice * 20 / 100]);

let over60Discount = (trainPrice - [trainPrice * 40 / 100 ]);

let n1 = minorsDiscount.toFixed (2); 

let n2 = over60Discount.toFixed (2);

if (age < 18) {
    console.log (n1);
} else if (age > 65) {
    console.log (n2);
};

console.log (trainPrice);