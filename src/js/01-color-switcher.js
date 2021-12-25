refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
refs.stop.setAttribute('disabled', 'true');
let intervalId = null;

refs.start.addEventListener('click', () => {
  changeColorBody();
  setButtonAttribute();
});

refs.stop.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'true');
});

function changeColorBody() {
  intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function setButtonAttribute() {
  refs.start.setAttribute('disabled', 'true');
  refs.stop.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
