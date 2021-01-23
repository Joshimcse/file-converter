module.exports = (file) => {
  return file.split('.').slice(-1)[0].toLowerCase();
}
