document.addEventListener('DOMContentLoaded', () => {
  const newHeroForm = document.querySelector('#hero-form');
  newHeroForm.addEventListener('submit', handleNewHeroFormSubmit);

  const deleteEverything = document.querySelector('#delete-everything');
  deleteEverything.addEventListener('click', handleDeleteEverythingClick);
})

const handleNewHeroFormSubmit = function(event) {
  event.preventDefault();
  
  const newFellowshipHero = createNewFellowshipHero(event.target);

  const fellowship = document.querySelector('#fellowship');
  fellowship.appendChild(newFellowshipHero);
  event.target.reset();
}

const createNewFellowshipHero = function(form) {
  const newFellowshipHero = document.createElement('li');
  newFellowshipHero.classList.add('fellowship-list');

  const name = document.createElement('h2');
  name.textContent = `Name: ${form.name.value}`;
  newFellowshipHero.appendChild(name);

  const title = document.createElement('h2');
  title.textContent = `Title: ${form.title.value}`;
  newFellowshipHero.appendChild(title);

  const race = document.createElement('h2');
  race.textContent = `Race: ${form.race.value}`;
  newFellowshipHero.appendChild(race);

  const weapon = document.createElement('h2');
  weapon.textContent = `Weapon: ${form.weapon.value}`;
  newFellowshipHero.appendChild(weapon);

  return newFellowshipHero;
}

const handleDeleteEverythingClick = function(event) {
  const fellowship = document.querySelector('#fellowship');
  fellowship.innerHTML = '';
}
