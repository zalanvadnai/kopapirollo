const eredmenyElem = document.getElementById("result");
const pontElem = document.getElementById("score");
let jatekosPont = 0;
let gepPont = 0;

function play(jatekosValasztas) {
  const valasztasok = ['kő', 'papír', 'olló'];
  const gepValasztas = valasztasok[Math.floor(Math.random() * 3)];
  let eredmeny = '';

  if (jatekosValasztas === gepValasztas) {
    eredmeny = `Döntetlen! Mindketten: ${jatekosValasztas}`;
  } else if (
    (jatekosValasztas === 'kő' && gepValasztas === 'olló') ||
    (jatekosValasztas === 'papír' && gepValasztas === 'kő') ||
    (jatekosValasztas === 'olló' && gepValasztas === 'papír')
  ) {
    eredmeny = `Nyertél! ${jatekosValasztas} legyőzi a(z) ${gepValasztas}-t.`;
    jatekosPont++;
  } else {
    eredmeny = `Vesztettél! ${gepValasztas} legyőzi a(z) ${jatekosValasztas}-t.`;
    gepPont++;
  }

  eredmenyElem.textContent = eredmeny;
  pontElem.textContent = `Játékos Pontszáma: ${jatekosPont} | Gép Pontzsáma: ${gepPont}`;
}
