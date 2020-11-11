// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var numberKm = parseInt(prompt("Quanti km vuole percorrere?"))
console.log(numberKm)

var age = parseInt(prompt("Qual è la sua età?"))
console.log(age)
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
var ticketPricePerKm = 0.21;

var ticketPrice = parseInt(numberKm * ticketPricePerKm);
console.log(ticketPrice);

var tcketPriceDiscount;

if (age < 18) {
  // va applicato uno sconto del 20% per i minorenni;
  ticketPriceDiscount = ticketPrice - ((ticketPrice * 20) / 100);
} else if (age > 65) {
  // va applicato uno sconto del 40% per gli over 65.
  ticketPriceDiscount = ticketPrice - ((ticketPrice * 40) / 100);
} else {
  ticketPriceDiscount = ticketPrice;
}
console.log(ticketPriceDiscount);
document.getElementById("price").innerHTML = ticketPriceDiscount;
