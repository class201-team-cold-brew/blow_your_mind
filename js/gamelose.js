function setAni(elId, time, classname) {
  setTimeout(function(){
    addClass(elId, classname);
  },time);
}

function addClass(myEl, myClass) {
  document.getElementById(myEl).classList.add(myClass);
}

function init() {
  setAni('lose1', 0, 'zoom-enter');
  setAni('lose2', 150, 'zoom-enter');
  setAni('lose3', 300, 'zoom-enter');
  setAni('lose4', 450, 'zoom-enter');
  setAni('lose5', 600, 'zoom-enter');
  setAni('lose6', 700, 'zoom-enter');
  setAni('lose7', 800, 'zoom-enter');
  setAni('lose8', 900, 'zoom-enter');
  setAni('lose9', 1500, 'fadezoombump');
  setAni('lose9a', 1800, 'fadezoombump');
  setAni('lose9b', 2100, 'fadezoombump');
}