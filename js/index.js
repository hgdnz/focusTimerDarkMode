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
