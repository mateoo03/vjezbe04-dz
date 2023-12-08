var provjeriBroj = function(broj) {
  if (typeof broj === 'number') {
    return broj * broj; // Vraća kvadrat broja ako je argument broj
  } else {
    return "Pogreška: Proslijedite broj!"; // Vraća obavijest o pogrešci ako argument nije broj
  }
};

// Testiranje funkcije
console.log(provjeriBroj(5)); // Ispisat će 25 (kvadrat broja 5)
console.log(provjeriBroj("neki tekst")); // Ispisat će "Pogreška: Proslijedite broj!"