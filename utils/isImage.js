module.exports = (file) => {
  const ext = file.split('.').slice(-1)[0].toLowerCase()
  switch (ext) {
    case 'jpg':
    case 'png':
    case 'jpeg':
      return true
    default:
      return false
  }
}
