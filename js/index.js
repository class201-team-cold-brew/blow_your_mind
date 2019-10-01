//variables
var form;// TODO replace with a valid ID 
var welcome; ///
var hint;
var x;
var howtoplay;

//functions
function init() {
  form = document.getElementById('user-form');
  form.addEventListener('submit', handleForm);
  welcome = document.getElementById('welcome');
  hint = document.getElementById('rules');
  x = document.getElementById('x');
  howtoplay = document.getElementById('howtoplay');
  x.addEventListener('click', closeHint);
  howtoplay.addEventListener('click', displayRules)
  hint.style.display = 'none';
}

User.all = [];
function User(name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;

  User.all.push(this);
}

function handleForm(event) {
  event.preventDefault();

  var formLocal = event.target;

  var name = formLocal.name.value;
  var difficulty = formLocal.difficulty.value;

  new User(name, difficulty);

  console.log(name + difficulty);

  form.style.display = 'none';
  welcome.style.display = 'block';

  var pEl = document.createElement('p');
  pEl.textContent = `Welcome ${name}. You have chosen ${difficulty} level.`;
  welcome.appendChild(pEl);
  updateStorage();
}
///place data into local storage
function updateStorage() {
  var storeString = JSON.stringify(User.all);
  localStorage.setItem('user',storeString );
}

function closeHint(event) {
  event.preventDefault();
  hint.style.display = 'none';

}

function displayRules(event) {
  event.preventDefault();
  hint.style.display = 'block';

}
