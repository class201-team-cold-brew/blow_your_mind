//variables
var form;// TODO replace with a valid ID 
var welcome; ///
var indexRules;
var x;
var howtoplay;

//functions

User.all = [];
function User(name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;
  this.time = null;

  User.all.push(this);
}

function handleForm(event) {
  event.preventDefault();

  var formLocal = event.target;

  var name = formLocal.name.value;
  var difficulty = formLocal.difficulty.value;

  new User(name, difficulty);
  updateStorage();

  form.style.display = 'none';
  welcome.style.display = 'block';

  var pEl = document.createElement('p');
  pEl.textContent = `Welcome ${name}. You have chosen ${difficulty} level.`;
  welcome.appendChild(pEl);

}
///place data into local storage

function updateStorage() {
  var storeString = JSON.stringify(User.all);
  localStorage.setItem('user', storeString);
}

var storage = [];

function pullData() {
  // if (localStorage.mall) 

  var data = localStorage.getItem('user');

  var parsedData = JSON.parse(data);

  User.all = parsedData;

}


function closeHint() {
  indexRules.style.right = '-100%';
}

function displayRules() {
  indexRules.style.right = '0%';
}

var highScore = document.getElementById('highscore');

highScore.addEventListener('submit', rank)

function rank(event) {

  for (var i = 0; i < User.all.length; i++) {
  }
  var ulEl = document.createElement('li');


  ulEl.textContent = localStorage.user
}

function init() {
  form = document.getElementById('user-form');
  form.addEventListener('submit', handleForm);
  welcome = document.getElementById('welcome');
  indexRules = document.getElementById('rules');
  x = document.getElementById('x');
  howtoplay = document.getElementById('howtoplay');
  x.addEventListener('click', closeHint);
  howtoplay.addEventListener('click', displayRules);

  pullData();
  console.log(User.all);

}