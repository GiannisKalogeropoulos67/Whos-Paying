document.addEventListener('DOMContentLoaded', function() {
  console.log('Poios Kernaei script loaded');

  const allNames = ['Γιάννης','Αγγελίνα','Αναστασία','Ευαγγελία','Νίκος'];
  const header = document.querySelector('h1');
  const out = document.getElementById('winner-name');
  const chips = Array.from(document.querySelectorAll('.name-chip'));

  if (!header || !out) {
    console.warn('Required elements not found');
    return;
  }

  // Init: no chips active -> treat as all selected
  chips.forEach(c => {
    c.style.cursor = 'pointer';
    c.addEventListener('click', function() {
      c.classList.toggle('active');
    });
  });

  function getSelectedNames() {
    const active = chips.filter(c => c.classList.contains('active')).map(c => c.dataset.name);
    return active.length ? active : allNames.slice();
  }

  header.style.cursor = 'pointer';
  header.addEventListener('click', function() {
    const pool = getSelectedNames();
    const pick = pool[Math.floor(Math.random() * pool.length)];
    out.textContent = pick;
  });
});
/**
 * Selects a random person from a list and returns a message indicating they are paying today.
 * @param {string[]} names - An array of person names
 * @returns {string} A message with the randomly selected person's name and "Plhrwnei shmera" (pays today in Greek)
 */
function poiosPlhrwnei(names){
    var arithmosAtomwn = names.length;
    var randomPersonPosition = Math.floor(Math.random() * arithmosAtomwn);
    var randomPerson = names[randomPersonPosition];

    return + " Plhrwnei shmera";
}
//poiosPlhrwnei(["Giannis", "Aggelina"]);

