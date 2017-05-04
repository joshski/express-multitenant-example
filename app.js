const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/brands/:brand', function(req, res) {
  res.render('index', { brand: req.params.brand })
})

app.use(express.static('./public'))

app.listen(4321)
