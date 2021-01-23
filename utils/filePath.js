const path = require('path')

exports.getFile = (file) => {
  return path.join(__basedir, process.env.TARGET_DIR, file)
}

exports.convertedFile = (file) => {
  return path.join(__basedir, process.env.DIST_DIR, file)
}

exports.readFiles = () => {
  return path.join(__basedir, process.env.TARGET_DIR);
}
