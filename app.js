const express = require('express')
const app = express()

const port = Process.env.PORT || 3000 ;

app.get('/', (req, res) => {
  res.send('Haydi Bismillah !')
})

app.listen(port, () => {
  console.log("Örnek uygulama dinleniyor inşallah." +port);
})
 