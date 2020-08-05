const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost:17017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
