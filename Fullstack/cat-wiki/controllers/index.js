module.exports.getIndex = (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
}