const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('port', (process.env.PORT || 8080))

app.listen(app.get('port'), () => console.log('Express server running on port ' + app.get('port')))