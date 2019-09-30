//variables
var form;// TODO replace with a valid ID 
var welcome; ///

//functions
function init() { 
  form = document.getElementById('user-form');
  form.addEventListener('submit', handleForm);
  welcome = document.getElementById('welcome');
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

function updateStorage() {
  var storeString = JSON.stringify(User.all);
  localStorage.setItem('user', storeString);
}
