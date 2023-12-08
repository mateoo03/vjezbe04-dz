function randomBrojevi(min, max) {
  for (var i = 0; i < 5; i++) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
  }
}

// Testiranje funkcije s ulaznim brojevima 1 i 10
randomBrojevi(1, 10);