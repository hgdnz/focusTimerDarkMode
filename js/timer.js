import Sounds from './sounds.js'
import { buttonPause, buttonPlay } from './elements.js'

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  let newMinutes

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function addMinutes() {
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
    secondsDisplay.textContent = String(0).padStart(2, '0')
    minutes = Number(minutesDisplay.textContent)
    newMinutes = minutes
  }

  function subTime() {
    if (minutesDisplay.textContent == '00') {
      minutesDisplay.textContent = String(0).padStart(2, '0')
      secondsDisplay.textContent = String(0).padStart(2, '0')
      minutes = Number(minutesDisplay.textContent)
      newMinutes = minutes
    } else {
      minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
      secondsDisplay.textContent = String(0).padStart(2, '0')
      minutes = Number(minutesDisplay.textContent)
      newMinutes = minutes
    }
  }

  function countdown(sound) {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        Sounds().timeEnd.play()
        Sounds().coffeeShop.pause()
        Sounds().nature.pause()
        Sounds().rain.pause()
        Sounds().bonfire.pause()
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        resetTimer()
        return
      }

      if (seconds <= 0) {
        seconds = 2
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function resetTimer() {
    newMinutes = 0
    minutes = 0
  }

  return {
    addMinutes,
    subTime,
    updateDisplay,
    updateMinutes,
    countdown,
    newMinutes,
    minutes,
    seconds,
    resetTimer,
    hold
  }
}
