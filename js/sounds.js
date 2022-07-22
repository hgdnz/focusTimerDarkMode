export default function () {
  const coffeeShop = new Audio('./sounds/Cafeteria.wav')

  const rain = new Audio('./sounds/Chuva.wav')

  const nature = new Audio('./sounds/Floresta.wav')

  const bonfire = new Audio('./sounds/Lareira.wav')

  coffeeShop.loop = true
  rain.loop = true
  nature.loop = true
  bonfire.loop = true

  const timeEnd = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  return {
    coffeeShop,
    rain,
    nature,
    bonfire,
    timeEnd
  }
}
