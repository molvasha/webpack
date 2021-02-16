

/*let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button_start");
let buttonStop = document.getElementById("button_stop");
let timerShow = document.getElementById("timer_left");

buttonRun.addEventListener('click', function () {
  timeMinut = parseInt(timerInput.value) * 60
});

buttonStop.addEventListener('click', function () {
  clearInterval(timer);
});*/

let timer;

export function stopTimer() {
  clearInterval(timer);
}

export function startTimer(time, element) {
  timer = setInterval(function () {
    let seconds = time % 60;
    let minutes = time / 60 % 60;
    let hour = time / 60 / 60 % 60;

    if (time <= 0) {
      clearInterval(timer);

      let endAudio = new Audio('./src/sound.mp3');
      endAudio.play()
      setTimeout(() => {
        endAudio.pause();
      }, 3000)

      //alert("Время закончилось");
    } else {
      let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;

      element.innerHTML = strTimer;
    }
    --time;
  }, 1000);
}