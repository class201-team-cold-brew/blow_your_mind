function setAni(elId, time, classname) {
  setTimeout(function(){
    addClass(elId, classname);
  },time);
}

function addClass(myEl, myClass) {
  document.getElementById(myEl).classList.add(myClass);
}

function init() {
  setAni('win1', 0, 'zoom-enter');
  setAni('win2', 150, 'zoom-enter');
  setAni('innerBox', 550, 'overflow-hidden');
  setAni('win3', 550, 'enter-bottom');
  setAni('win4', 620, 'enter-bottom');
  setAni('win5', 800, 'fadezoombump');
  setAni('win6', 1200, 'fadezoombump-hero');
}
