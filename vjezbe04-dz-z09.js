function savrseniBrojevi(doBroja) {
  for (var broj = 2; broj <= doBroja; broj++) {
    var zbrojDjelitelja = 1;

    // Pronalazak djelitelja i izračun zbroja pravih djelitelja
    for (var i = 2; i <= Math.sqrt(broj); i++) {
      if (broj % i === 0) {
        zbrojDjelitelja += i;
        if (i !== broj / i) {
          zbrojDjelitelja += broj / i;
        }
      }
    }

    // Provjera je li broj savršen i ispis
    if (zbrojDjelitelja === broj) {
      console.log("Savršen broj:", broj);
    }
  }
}

// Testiranje funkcije
var granica = 10000; // Možete promijeniti ovu granicu kako bi ispisali savršene brojeve do željenog broja
savrseniBrojevi(granica);