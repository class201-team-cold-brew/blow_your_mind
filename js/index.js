//variables
function init() { }
var form = document.getElementById('user-form');// TODO replace with a valid ID 
var welcome = document.getElementById('welcome'); ///

//functions



function User(name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;

  User.all.push(this);
}

User.all = [];



console.log('everything starts here');


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

form.addEventListener('submit', handleForm);

function updateStorage() {
  var storeString = JSON.stringify(User.all);
  localStorage.setItem('user', storeString);

}
