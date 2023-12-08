// Kreiranje objekata
var osoba1 = {
  firstName: "Marko",
  lastName: "Maric",
  age: 40,
  eyeColor: "black"
};

var osoba2 = {
  firstName: "Ana",
  lastName: "Anić",
  age: 30,
  eyeColor: "brown"
};

var osoba3 = {
  firstName: "Ivan",
  lastName: "Ivanić",
  age: 25,
  eyeColor: "blue"
};

// Polje objekata
var osobe = [osoba1, osoba2, osoba3];

// Ispisivanje vrijednosti i indeksa objekata korištenjem petlje
for (var i = 0; i < osobe.length; i++) {
  var objekt = osobe[i];
  console.log("Indeks:", i);
  for (var key in objekt) {
    if (objekt.hasOwnProperty(key)) {
      console.log(key + ": " + objekt[key]);
    }
  }
  console.log("-------------------------");
}