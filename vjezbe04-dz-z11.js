const tempDay = [
  '2023-11-29', -1, 0, -0.5, -0.5, 0, 1.2, 1.8, 2, 3, 4, 6, 9, 12, 7, 6, 6, 8, 5, 4, 2, 3, 2, 1, 0
];

function obradiTemperaturu(tempDay) {
  const datum = tempDay[0];
  const temperature = tempDay.slice(1); // Izdvajanje temperature iz polja

  // Pronalaženje minimalne i maksimalne temperature
  const najmanjaTemp = Math.min(...temperature);
  const najvecaTemp = Math.max(...temperature);

  // Izračun prosječne temperature
  const prosjekTemp = temperature.reduce((acc, curr) => acc + curr, 0) / temperature.length;

  // Ispis rezultata u konzolu
  console.log('Datum:', datum);
  console.log('Najmanja temperatura:', najmanjaTemp);
  console.log('Najveća temperatura:', najvecaTemp);
  console.log('Prosječna temperatura:', prosjekTemp.toFixed(2));
}

// Testiranje funkcije s ulaznim poljem
obradiTemperaturu(tempDay);