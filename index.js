const express = require('express')
const app = express()
const port = 8080

const sessoes = require('./routes/sessao_route');

app.use(express.json())
app.use('/api/sessoes', sessoes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

