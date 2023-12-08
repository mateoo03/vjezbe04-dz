// Kreiranje objekta psa
var pas = {
  ime: "Reks",
  godine: 2
};

// Dodavanje funkcije kao svojstva objektu psa
pas.zvuk = function() {
  return "AV AV!";
};

// Testiranje funkcije
console.log("Ime psa:", pas.ime);
console.log("Starost psa:", pas.godine);
console.log("Zvuk psa:", pas.zvuk()); // Poziv funkcije za dobivanje zvuka psa