/* eslint-disable */
const sharp = require('sharp')
const EXT = '.jpg'
const FOLDER = './src/public/hero-image_1'

sharp(FOLDER + EXT)
  .normalise(true)
  .resize(600, 400) // width, height
  .toFile(`${FOLDER}.min${EXT}`)
