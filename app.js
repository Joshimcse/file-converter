const fs = require('fs')

require('dotenv').config()
global.__basedir = __dirname

const fileType = require('./utils/fileType')
const isImage = require('./utils/isImage')
const { aiToPdf, epsToPdf, psdToPng, pngToPdf } = require('./utils/converter')
const { readFiles } = require('./utils/filePath')

fs.readdir(readFiles(), function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  files.forEach((file) => {
    if (isImage(file)) {
      // console.log(
      //   `${file} is a images type file, we still working for images to pdf converter...`
      // )
      pngToPdf(file)
    } else if (fileType(file) === 'ai') {
      aiToPdf(file)
    } else if (fileType(file) === 'eps') {
      epsToPdf(file)
    } else if (fileType(file) === 'psd') {
      psdToPng(file)
    }
  })
})
