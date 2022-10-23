const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('welcome in express World!')
})

app.get('/about', (req, res) => {
    res.send('This is express about ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})