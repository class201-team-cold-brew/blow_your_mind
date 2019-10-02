var riddleEasy = [];

var answerEasy = [];

var hintEasy = [];

var riddleNorm = [
  'What has branches and leaves and no bark?',
  'The more you take away from it the larger it grows, what is it?',
  'What is always on its way here, but never arrives?',
  'I run all around the pasture but never move.  What am I?',
  'What can go up a chimney down but can\'t go down a chimney up?',
  'Who is that with a neck and no head, two arms and no hands?',
  'What has a long neck, A name of a bird, Feeds on cargo of ships, it\'s not alive ?',
  'You can see it every day but cannot touch it at will. What is it?',
  'A very pretty thing am I, fluttering in the pale-blue sky. Delicate, fragile on the wing, indeed I am a pretty thing. What am I?',
  'A door is not a door when it is?',
  'It can\'t be seen, can\'t be felt, can\'t be heard and can\'t be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after, ends life and kills laughter.',
  'No matter how little or how much you use me, you change me every month. What am I?'
];

var answerNorm = [
  'library',
  'hole',
  'tomorrow',
  'fence',
  'umbrella',
  'shirt',
  'crane',
  'sky',
  'butterfly',
  'ajar',
  'darkness',
  'calendar'
];

var hintNorm = [
  ['Shhh, this is a quiet place.', 'Shhh, this is a quiet place.', 'Shhh, this is a quiet place.'],
  ['Keep diggin’, you’ll get it.', 'Keep diggin’, you’ll get it.', 'Keep diggin’, you’ll get it.'],
  ['Not a tangible object.', 'Not a tangible object.', 'Not a tangible object.'],
  ['It keeps things inside.', 'It keeps things inside.', 'It keeps things inside.'],
  ['When it is open you are protected.', 'When it is open you are protected.', 'When it is open you are protected.'],
  ['You can have it in different colors.', 'You can have it in different colors.', 'You can have it in different colors.'],
  ['You can fold paper into this.', 'You can fold paper into this.', 'You can fold paper into this.'],
  ['Look it’s up.', 'Look it’s up.', 'Look it’s up.'],
  ['You can swim this way.', 'You can swim this way.', 'You can swim this way.'],
  ['You can put a lid on it.', 'You can put a lid on it.', 'You can put a lid on it.'],
  ['Can be achieved by flipping a switch.', 'Can be achieved by flipping a switch.', 'Can be achieved by flipping a switch.']
];

var riddleHard = [];

var answerHard = [];

var hintHard = [];

var currentRiddles = [];

//riddle game logic variables
var answered = 0;
var attempts = 3;
var tries;

//how to play variables
var x;
var gameRules;
var gameRuleBtn;

//kill code variables
var code;
var randomCode;

//game buttons variables
var btn1;
var btn2;
var btn3;
var isBtn1Done = false;
var isBtn2Done = false;
var isBtn3Done = false;
var activeBtn;

//game keys variables
var key1;
var key2;
var key3;
var keyTimer = 0;

//pipe variables
var pipeOne;
var pipeTwo;
var pipeThree;
var pipeTimer = 0;

//quest box generation variables
var questBox;
var answerQuestForm;
var questP;

//array that holds instants base on which difficulty for this session
Question.allQ = [];


function closeRule() {
  gameRules.style.right = '-100%';
  resume();
}

function openRule() {
  gameRules.style.right = '0';
  pause();
}

function Question(question, answer, hint) {
  this.question = question;
  this.answer = answer;
  this.hint = hint;
  Question.allQ.push(this);
}

function genRandom() {
  var genRandom = Math.floor(Math.random() * Question.allQ.length);
  return genRandom;
}

function handleQuest(event) {
  stopClickEvents();
  activeBtn = event.target.id;
  questP.textContent = currentRiddles[answered].question;
  questBox.appendChild(questP);
  console.log(currentRiddles[answered].question);
}

//call this function to remove all eventlisteners.
function stopClickEvents() {
  btn1.removeEventListener('click', handleQuest);
  btn2.removeEventListener('click', handleQuest);
  btn3.removeEventListener('click', handleQuest);
}

function startClickEvents() {
  if(!isBtn1Done) {
    btn1.addEventListener('click', handleQuest);
  }
  if(!isBtn2Done) {
    btn2.addEventListener('click', handleQuest);
  }
  if(!isBtn3Done) {
    btn3.addEventListener('click', handleQuest);
  }
}

function handleAnswer(event) {
  event.preventDefault();
  var userAnswer = event.target.answer.value;
  var questAnswer = currentRiddles[answered].answer;
  if (userAnswer.toLowerCase() === questAnswer) {
    console.log('you got it');
    correctAnswer();
    answered++;
  } else {
    userAnswer = null;
    attempts--;
    tries.textContent = attempts;
  }
}

function correctAnswer() {
  var currentBtn;
  var currentKey;
  var currentNum;
  if(activeBtn === 'btn1'){
    currentBtn = btn1;
    currentKey = key1;
    currentNum = 1;
    isBtn1Done = true;
  }
  if(activeBtn === 'btn2'){
    currentBtn = btn2;
    currentKey = key2;
    currentNum = 2;
    isBtn2Done = true;
  }
  if(activeBtn === 'btn3'){
    currentBtn = btn3;
    currentKey = key3;
    currentNum = 3;
    isBtn3Done = true;
  }
  currentBtn.classList.add('fadeout-top');
  currentBtn.style.cursor = 'auto';
  keyTimer = setTimeout(function(){
    currentKey.classList.add('move-to-origin');
    pipeTimer = setTimeout(function(){
      keyComplete(currentNum);
    },1000);
  },800);
}

function keyComplete(key) {
  clearTimeout(keyTimer);
  clearTimeout(pipeTimer);
  if (key === 1) {
    pipeOne.style.backgroundImage = 'url(\'img/game-pipe-green.png\')';
  }
  if (key === 2) {
    pipeTwo.style.backgroundImage = 'url(\'img/game-pipe-green.png\')';
  }
  if (key === 3) {
    pipeThree.style.backgroundImage = 'url(\'img/game-pipe-green.png\')';
  }
  questP.textContent = '';
  startClickEvents();
}

function getRandomCode() {
  var random = Math.floor(Math.random() * 9999 + 1000);
  return random;
}

function getCode(event) {
  event.preventDefault();
  // randomCode = getRandomCode();
  randomCode = 4444;
  var code = event.target.killCode.value;
  if (code === randomCode) {
    pause();
    var convert = timerMs - timeLeft;
    var min = Math.floor((convert / 1000 / 60) << 0),
      sec = Math.floor((convert / 1000) % 60);
    var finaltime = min + ':' + sec;
    console.log(finaltime);
    localStorage.setItem('finaltime', finaltime);
    // window.location.href ='gamewin.html';
  } else {
    pause();
    window.location.href = 'gamelose.html';
  }
}

// function getCode(event) {
//   event.preventDefault();
//   // randomCode = randomCode();
//   randomCode = 4444;

  
//   var code = event.target.killCode.value;
//   if (code == randomCode) {
//     pause();
//     var convert = timerMs - timeLeft;
//     var min = Math.floor((convert / 1000 / 60) << 0),
//       sec = Math.floor((convert / 1000) % 60);
//     var finaltime = min + ':' + sec;
//     // console.log(finaltime);
//     //totalTime.push(finaltime);
//     //var storeString = JSON.stringify(finaltime);

//     localStorage.setItem('finaltime', finaltime);

//     // retrieveUser();
//     // getTime();
//     //window.location.href = 'gamewin.html';
//   } else {
//     pause();
//     window.location.href = 'gamelose.html';
//   }
// }

// function randomCode() {
//   var random = Math.floor(Math.random() * 9999 + 1000);
//   return random;
// }

// var totalUser = [];
// var totalTime = [];

// function retrieveUser() {
//   // if (localStorage.mall) 

//   var data = localStorage.getItem('user');

//   var parsedData = JSON.parse(data);
//   totalUser = parsedData;

//   console.log(totalUser);
// }


// function getTime() {

//   var data1 = localStorage.getItem('finaltime');

//   //var parsedData1 = JSON.parse(data1);

//   //totalTime = data1;
//   console.log(data1);

// }

///////////////////////////////    https://codepen.io/yaphi1/pen/QbzrQP
// 20 minutes from now
var timer = 14.99;

var timerMs = timer * 60000;


var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timer * 60 * 1000);

function timeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds, };
}

var timeinterval;
function run_clock(id, endtime) {
  var clock = document.getElementById(id);
  function update_clock() {
    var t = timeRemaining(endtime);
    //clock.innerHTML = 'minutes: ' + t.minutes + '<br>seconds: ' + t.seconds;
    clock.innerHTML = 'Time left: ' + t.minutes + ':' + t.seconds;
    if (t.total <= 0) { clearInterval(timeinterval); }
  }
  update_clock(); // run function once at first to avoid delay
  timeinterval = setInterval(update_clock, 1000);
}

var paused = false; // is the clock paused?
var timeLeft; // time left on the clock when paused

function pause() {
  if (!paused) {
    paused = true;
    clearInterval(timeinterval); // stop the clock
    timeLeft = timeRemaining(deadline).total; // preserve remaining time
    timer = timeRemaining(deadline).total;
  }
}

function resume() {
  if (paused) {
    paused = false;

    // update the deadline to preserve the amount of time remaining
    deadline = new Date(Date.parse(new Date()) + timeLeft);

    // start the clock
    run_clock('clockdiv', deadline);
  }
}
////////////////////////////////////////////////////////////////////////////////////

function init() {
  gameRules = document.getElementById('gamerules');
  gameRuleBtn = document.getElementById('gameRuleBtn');
  gameRuleBtn.addEventListener('click', openRule);
  x = document.getElementById('x');
  x.addEventListener('click', closeRule);

  btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', handleQuest);
  btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', handleQuest);
  btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', handleQuest);

  code = document.getElementById('killcodes');
  code.addEventListener('submit', getCode);

  questBox = document.getElementById('questBox');
  questP = document.getElementById('questP');
  answerQuestForm = document.getElementById('questSubmit');
  answerQuestForm.addEventListener('submit', handleAnswer);

  tries = document.getElementById('tries');
  tries.textContent = attempts;

  key1 = document.getElementById('key1');
  key2 = document.getElementById('key2');
  key3 = document.getElementById('key3');
  key1.classList.remove('hide');
  key2.classList.remove('hide');
  key3.classList.remove('hide');

  pipeOne = document.getElementById('pipeOne');
  pipeTwo = document.getElementById('pipeTwo');
  pipeThree = document.getElementById('pipeThree');

  run_clock('clockdiv', deadline);

  for (var i = 0; i < riddleNorm.length; i++) {
    new Question(riddleNorm[i], answerNorm[i], hintNorm[i]);
  }

  console.log(Question.allQ);

  var randomQ;
  var randomA;
  var randomH;

  do {
    randomQ = genRandom();
    randomA = genRandom();
    randomH = genRandom();
  }
  while (randomQ === randomA || randomA === randomH || randomQ === randomH);

  currentRiddles.push(Question.allQ[randomQ]);
  currentRiddles.push(Question.allQ[randomA]);
  currentRiddles.push(Question.allQ[randomH]);

  console.log(currentRiddles);

  console.log(Question.allQ[randomQ]);
}




