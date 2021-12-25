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
