const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT | 5000;

app.use(express.static(path.join(__dirname, 'dist')));

if(process.env.NODE_ENV === 'development') {
  app.use(cors())
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})

