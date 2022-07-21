import Sounds from './sounds.js'
import Controls from './controls.js'
import Timer from './timer.js'

import {
  buttonClear,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  minutesDisplay,
  secondsDisplay,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire,
  buttonbgDark,
  buttonctrlDark,
  buttonSoundsDark
} from './elements.js'

import Events from './events.js'

const sound = Sounds()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonClear,
  buttonDark,
  minutesDisplay,
  secondsDisplay,
  buttonbgDark,
  buttonctrlDark,
  buttonSoundsDark,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

Events({
  timer,
  controls,
  sound,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire
})

// const buttonPlay = document.querySelector('.play')
// const buttonPause = document.querySelector('.pause')
// const buttonStop = document.querySelector('.stop')
// const buttonAddTime = document.querySelector('.addTime')
// const buttonSubTime = document.querySelector('.subTime')
// const minutesDisplay = document.querySelector('.minutes')
// const secondsDisplay = document.querySelector('.seconds')
// const buttonCoffeeShop = document.querySelector('.coffeeShop')
// const buttonNature = document.querySelector('.nature')
// const buttonRain = document.querySelector('.rain')
// const buttonBonfire = document.querySelector('.bonfire')

// function play() {
//   if (newMinutes <= '00') {
//     hold()
//   } else {
//     buttonPlay.classList.add('hide')
//     buttonPause.classList.remove('hide')
//   }
// }

// function pause() {
//   buttonPause.classList.add('hide')
//   buttonPlay.classList.remove('hide')
// }

// function stopTime() {
//   buttonPause.classList.add('hide')
//   buttonPlay.classList.remove('hide')
//   minutesDisplay.textContent = String(0).padStart(2, '0')
//   secondsDisplay.textContent = String(0).padStart(2, '0')
//   sound.coffeeShop.pause()
//   sound.nature.pause()
//   sound.rain.pause()
//   sound.bonfire.pause()
//   minutes = 0
// }

// function hold() {
//   clearTimeout(timerTimeOut)
// }

// function addMinutes() {
//   minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
//   secondsDisplay.textContent = String(0).padStart(2, '0')
//   minutes = Number(minutesDisplay.textContent)
//   newMinutes = minutes
// }

// function subTime() {
//   if (minutesDisplay.textContent == '00') {
//     minutesDisplay.textContent = String(0).padStart(2, '0')
//     secondsDisplay.textContent = String(0).padStart(2, '0')
//     minutes = Number(minutesDisplay.textContent)
//     newMinutes = minutes
//   } else {
//     minutesDisplay.textContent = String(newMinutes - 5).padStart(2, '0')
//     secondsDisplay.textContent = String(0).padStart(2, '0')
//     minutes = Number(minutesDisplay.textContent)
//     newMinutes = minutes
//   }
// }

// function updateDisplay(newMinutes, seconds) {
//   newMinutes = newMinutes === undefined ? minutes : newMinutes
//   seconds = seconds === undefined ? 0 : seconds
//   minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
//   secondsDisplay.textContent = String(seconds).padStart(2, '0')
// }

// function countdown() {
//   timerTimeOut = setTimeout(function () {
//     let seconds = Number(secondsDisplay.textContent)
//     let minutes = Number(minutesDisplay.textContent)
//     let isFinished = minutes <= 0 && seconds <= 0
//     updateDisplay(minutes, 0)

//     if (isFinished) {
//       controls.stopTime()
//       sound.coffeeShop.pause()
//       sound.nature.pause()
//       sound.rain.pause()
//       sound.bonfire.pause()
//       sound.timeEnd.play()
//       return
//     }

//     if (seconds <= 0) {
//       seconds = 2
//       --minutes
//     }

//     updateDisplay(minutes, String(seconds - 1))

//     countdown()
//   }, 1000)
// }

// buttonPlay.addEventListener('click', function () {
//   controls.play()
//   countdown()
// })

// buttonPause.addEventListener('click', function () {
//   controls.pause()
//   controls.hold()
//   sound.coffeeShop.pause()
//   sound.nature.pause()
//   sound.rain.pause()
//   sound.bonfire.pause()
// })

// buttonAddTime.addEventListener('click', function () {
//   addMinutes()
// })

// buttonSubTime.addEventListener('click', function () {
//   subTime()
// })

// buttonStop.addEventListener('click', function () {
//   controls.stopTime()
//   controls.hold()
//   sound.coffeeShop.pause()
//   sound.nature.pause()
//   sound.rain.pause()
//   sound.bonfire.pause()
//   sound.timeEnd.pause()
// })

// buttonCoffeeShop.addEventListener('click', function () {
//   sound.coffeeShop.play()
//   sound.nature.pause()
//   sound.rain.pause()
//   sound.bonfire.pause()
// })

// buttonNature.addEventListener('click', function () {
//   sound.coffeeShop.pause()
//   sound.nature.play()
//   sound.rain.pause()
//   sound.bonfire.pause()
// })

// buttonRain.addEventListener('click', function () {
//   sound.coffeeShop.pause()
//   sound.nature.pause()
//   sound.rain.play()
//   sound.bonfire.pause()
// })

// buttonBonfire.addEventListener('click', function () {
//   sound.coffeeShop.pause()
//   sound.nature.pause()
//   sound.rain.pause()
//   sound.bonfire.play()
// })
