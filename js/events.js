import {
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonSubTime,
  buttonStop,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire,
  buttonDark,
  buttonClear,
  natureVolume,
  rainVolume,
  coffeeshopVolume,
  bonfireVolume
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonClear.addEventListener('click', function () {
    controls.darkMode()
    controls.bgDarkOff()
    controls.ctrldarkOff()
    controls.soundsDarkOff()
  })

  buttonDark.addEventListener('click', function () {
    controls.clearMode()
    controls.bgDarkOn()
    controls.ctrldarkOn()
    controls.soundsDarkOn()
  })

  buttonPlay.addEventListener('click', function () {
    controls.playTime()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    controls.pauseTime()
    timer.hold()
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.pause()
  })

  buttonAddTime.addEventListener('click', function () {
    timer.addMinutes()
  })

  buttonSubTime.addEventListener('click', function () {
    timer.subTime()
  })

  buttonStop.addEventListener('click', function () {
    controls.stopTime()
    timer.hold()
    timer.resetTimer()
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.pause()
    sound.timeEnd.pause()
    controls.deselecteAll()
  })

  buttonCoffeeShop.addEventListener('click', function () {
    sound.coffeeShop.play()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.pause()
    controls.coffeeShopSelected()
  })

  buttonNature.addEventListener('click', function () {
    sound.coffeeShop.pause()
    sound.nature.play()
    sound.rain.pause()
    sound.bonfire.pause()
    controls.natureSelected()
  })

  buttonRain.addEventListener('click', function () {
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.play()
    sound.bonfire.pause()
    controls.rainSelected()
  })

  buttonBonfire.addEventListener('click', function () {
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.play()
    controls.bonfireSelected()
  })

  bonfireVolume.addEventListener('change', function () {
    sound.bonfire.volume = this.value
  })

  natureVolume.addEventListener('change', function () {
    sound.nature.volume = this.value
  })

  coffeeshopVolume.addEventListener('change', function () {
    sound.coffeeShop.volume = this.value
  })

  rainVolume.addEventListener('change', function () {
    sound.rain.volume = this.value
  })

  return {
    buttonStop,
    buttonAddTime,
    buttonSubTime,
    buttonCoffeeShop,
    buttonNature,
    buttonRain,
    buttonBonfire
  }
}
