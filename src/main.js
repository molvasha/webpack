import {diffDates, diffToHtml} from "./datecalc.js"; // 1
import {formatError} from "./utils.js"; // 2
import {startTimer, stopTimer} from "./timer.js";
import {changeTab} from "./tabs.js";

// DATE CALCULATOR

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  let {firstDate, secondDate} = event.target.elements;
  firstDate = firstDate.value, secondDate = secondDate.value;
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate); // 3
    dateCalcResult.innerHTML = diffToHtml(diff); // 4
  } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

// TIMER

const timerInput = document.getElementById("time");
const buttonRun = document.getElementById("button_start");
const buttonStop = document.getElementById("button_stop");
const timerShow = document.getElementById("timer_left")

buttonRun.addEventListener('click', () => {
  var timeValue = timerInput.value;

  startTimer(timeValue, timerShow)
})

buttonStop.addEventListener('click', () => {
  stopTimer();
})

// TABS

const tabsElem = document.querySelector('.tabs');
const tabsElemBody = tabsElem.querySelector('.tabs__body');
const tabsElemHeader = tabsElem.querySelector('.tabs__header');
const headerClass = 'tabs__header__item';
const activeHeaderClass = 'tabs__header__item_active';
const activeBodyClass = 'tabs__body__item_active';

tabsElem.addEventListener('click', e => {
  if (!e.target.classList.contains(activeHeaderClass) && e.target.classList.contains(headerClass)) {
    changeTab(e.target.dataset.target, tabsElemBody, tabsElemHeader, activeBodyClass, activeHeaderClass);
  }
})