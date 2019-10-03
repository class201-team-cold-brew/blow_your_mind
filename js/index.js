//variables
var form;// TODO replace with a valid ID
var welcome; ///
var indexRules;
var x;
var howtoplay;
var start;
var emptyText = true;
var highScore;
var rankWindow;
var rankList;
var rankX;

//functions
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
  emptyText = false;

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

function closeHint() {
  indexRules.style.right = '-100%';
}

function displayRules() {
  indexRules.style.right = '0%';
}

function openRank() {
  rankWindow.style.display = 'block';
}

function closeRank() {
  rankWindow.style.display = 'none';
  highScore.addEventListener('click', rank);
}

function rank() {

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
  openRank();
}

function checkEmpty() {
  if (emptyText === false) {
    window.location.href = 'game.html';
  }
  else {
    alert('Please enter your name before you proceed');

    form.name.focus();
  }
}


function init() {
  highScore = document.getElementById('highscore');
  rankList = document.getElementById('ranking');
  form = document.getElementById('user-form');
  form.addEventListener('submit', handleForm);
  welcome = document.getElementById('welcome');
  indexRules = document.getElementById('rules');
  x = document.getElementById('x');
  howtoplay = document.getElementById('howtoplay');
  x.addEventListener('click', closeHint);
  howtoplay.addEventListener('click', displayRules);
  start = document.getElementById('start');
  start.addEventListener('click', checkEmpty);
  highScore.addEventListener('click', rank);
  rankWindow = document.getElementById('rankWindow');
  rankX = document.getElementById('rankX');
  rankX.addEventListener('click', closeRank);
  pullData();
  console.log(User.all);
}

