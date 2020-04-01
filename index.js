const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.listen(port, () => console.log('Express server running on port ' + port))

app.get('/', function(req, res){
	res.render('index.html');
});