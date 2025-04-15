function jatek(jatekosValasztas) {
    const lehetosegek = ['kő', 'papír', 'olló'];
    const gepValasztas = lehetosegek[Math.floor(Math.random() * 3)];
  
    let eredmeny = '';
  
    if (jatekosValasztas === gepValasztas) {
      eredmeny = `Döntetlen! Mindketten ${jatekosValasztas} választottatok.`;
    } else if (
      (jatekosValasztas === 'kő' && gepValasztas === 'olló') ||
      (jatekosValasztas === 'papír' && gepValasztas === 'kő') ||
      (jatekosValasztas === 'olló' && gepValasztas === 'papír')
    ) {
      eredmeny = `Nyertél! A gép ${gepValasztas}-t választott.`;
    } else {
      eredmeny = `Vesztettél! A gép ${gepValasztas}-t választott.`;
    }
  
    document.getElementById('eredmeny').innerText = eredmeny;
  }
  