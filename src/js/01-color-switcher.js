refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
refs.stop.setAttribute('disabled', 'true');
let intervalId = null;

