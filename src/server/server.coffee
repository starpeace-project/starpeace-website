
express = require('express')
path = require('path')

app = express()
app.set('port', 11000)
app.use((req, res, next) ->
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.get('/demo', (req, res) -> res.redirect('http://127.0.0.1:11010/demo'))
app.get('/login.html', (req, res) -> res.redirect('http://127.0.0.1:11010/login.html'))

server = app.listen(app.get('port'), ->
  console.log("starpeace-website listening at port #{server.address().port}")
)
