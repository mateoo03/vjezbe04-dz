function filtrirajPodatke(polje) {
  var novoPolje = polje.filter(function(element) {
    // Provjera je li vrijednost u polju velika slova ili ima 5 ili više znakova
    return (typeof element === 'string' && element.toUpperCase() === element) || (typeof element !== 'string' && element.toString().length >= 5);
  });

  return novoPolje;
}

// Testiranje funkcije
var ulaznoPolje = ["Abc", "DEF", 12345, "test", "ABCD", 9876];
var rezultat = filtrirajPodatke(ulaznoPolje);
console.log(rezultat);