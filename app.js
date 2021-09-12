const express = require('express')
const app = express()
const port = process.env.port || 5500

app.get('/', (req, res) => {
  res.send('Haydi Bismillah!')
})

app.listen(port, () => {
  console.log(`Örnek uygulama dinleniyor inşallah. http://localhost:${port}`)
})