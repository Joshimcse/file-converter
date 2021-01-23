exports.fileNameWithOutExt = (file) => {
  return file.split('.').slice(0, -1).join('.')
}

exports.includeExt = (file, ext) => {
  return `${file}.${ext}`
}