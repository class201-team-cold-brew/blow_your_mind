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
function User(name, difficulty, time) {
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


///pull name and difficulty from the local storage
function pullData() {
  if (localStorage.user) {

    var data = localStorage.getItem('user');

    var parsedData = JSON.parse(data);

    User.all = parsedData;
  }

}

pullData();



function closeHint(event) {
  event.preventDefault();
  hint.style.display = 'none';
}

function displayRules(event) {
  event.preventDefault();
  hint.style.display = 'block';

}

var highScore = document.getElementById('highscore');
var rankList = document.getElementById('ranking');


highScore.addEventListener('click', rank);



function rank(event) {



  var data = localStorage.getItem('finaltime');

  User.all[User.all.length - 1].time = data;

  var storeString2 = JSON.stringify(User.all);
  localStorage.setItem('user', storeString2);



  console.log(User.all);

  for (var i = 0; i < User.all.length; i++) {
    var ulEl = document.createElement('li');

    ulEl.textContent = `${User.all[i].name}+${User.all[i].difficulty}+${User.all[i].time}`;
    rankList.appendChild(ulEl);
  }

  highScore.removeEventListener('click', rank);

}

