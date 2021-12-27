import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const refs = {
  start: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.start.addEventListener('click', () => {
  interval();
  refs.start.disabled = true;
});

let deltaTime;
let selectedDate = null;
refs.start.disabled = true;

// налаштування flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    // console.log('Selected:', selectedDate);
    if (selectedDate <= options.defaultDate) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.start.disabled = false;
  },
};

flatpickr('#datetime-picker', options);
// функція зароаняє нулями пусті поля двозначних цифр
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
// запускає таймер, виводить таймер на екран, зупиняє таймер при 00:00:00:00
function interval() {
  const timerId = setInterval(() => {
    const currentTime = new Date();
    deltaTime = selectedDate - currentTime;
    // console.log('Current:', currentTime);
    // console.log('Start:', selectedDate);
    // console.log('Delta:', deltaTime);
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
    if (deltaTime < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}
