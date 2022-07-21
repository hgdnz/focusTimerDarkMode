import Sounds from './sounds.js'
let minutes

export default function Controls({
  buttonPause,
  buttonPlay,
  newMinutes,
  minutesDisplay,
  secondsDisplay,
  buttonDark,
  buttonClear,
  buttonbgDark,
  buttonctrlDark,
  buttonSoundsDark,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire
}) {
  function playTime() {
    if (newMinutes <= '00') {
      controls.hold()
    } else {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
    }
  }

  function pauseTime() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function stopTime() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    minutesDisplay.textContent = String(0).padStart(2, '0')
    secondsDisplay.textContent = String(0).padStart(2, '0')
    Sounds().coffeeShop.pause()
    Sounds().nature.pause()
    Sounds().rain.pause()
    Sounds().bonfire.pause()
    Sounds().timeEnd.pause()
  }

  function clearMode() {
    buttonDark.classList.add('hide')
    buttonClear.classList.remove('hide')
  }

  function darkMode() {
    buttonClear.classList.add('hide')
    buttonDark.classList.remove('hide')
  }

  function bgDarkOn() {
    buttonbgDark.classList.add('bgDark')
  }

  function bgDarkOff() {
    buttonbgDark.classList.remove('bgDark')
  }

  function ctrldarkOn() {
    buttonctrlDark.classList.add('ctrldark')
  }
  function ctrldarkOff() {
    buttonctrlDark.classList.remove('ctrldark')
  }

  function soundsDarkOn() {
    buttonSoundsDark.classList.add('soundsdark')
  }
  function soundsDarkOff() {
    buttonSoundsDark.classList.remove('soundsdark')
  }

  function natureSelected() {
    buttonNature.classList.add('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
  }

  function rainSelected() {
    buttonNature.classList.remove('selected')
    buttonRain.classList.add('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
  }
  function bonfireSelected() {
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.add('selected')
    buttonCoffeeShop.classList.remove('selected')
  }
  function coffeeShopSelected() {
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.add('selected')
  }

  function deselecteAll() {
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
  }

  return {
    deselecteAll,
    natureSelected,
    rainSelected,
    bonfireSelected,
    coffeeShopSelected,
    playTime,
    pauseTime,
    stopTime,
    newMinutes,
    darkMode,
    clearMode,
    bgDarkOn,
    bgDarkOff,
    ctrldarkOn,
    ctrldarkOff,
    soundsDarkOn,
    soundsDarkOff,
    minutes
  }
}
