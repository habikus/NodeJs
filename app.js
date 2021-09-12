const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Haydi Bismillah!')
})

app.listen(port, () => {
  console.log(`Örnek uygulama dinleniyor. http://localhost:${port}`)
})