const fs = require('fs')
const psd = require('psd')
const colors = require('colors')

const { getFile, convertedFile } = require('./filePath')
const { includeExt, fileNameWithOutExt } = require('./utils')

exports.aiToPdf = (file) => {
  fs.copyFile(
    getFile(file),
    convertedFile(includeExt(fileNameWithOutExt(file), 'pdf')),
    (err) => {
      if (!err) {
        console.log(
          colors.cyan(file) + ' converted as pdf to dist dir successfully'
        )
      }
    }
  )
}

exports.epsToPdf = (file) => {
  fs.copyFile(
    getFile(file),
    convertedFile(includeExt(fileNameWithOutExt(file), 'pdf')),
    (err) => {
      if (!err) {
        console.log(
          colors.cyan(file) + ' converted as pdf to dist dir successfully'
        )
      }
    }
  )
}

exports.psdToPng = (file) => {
  psd
    .open(getFile(file))
    .then(function (data) {
      return data.image.saveAsPng(
        convertedFile(includeExt(fileNameWithOutExt(file), 'png'))
      )
    })
    .then(function () {
      console.log(
        colors.cyan(file) + ' converted as png to dist dir successfully'
      )
    })
}
