const express = require('express')

const app = express()

const port = 3000


app.get('/', (_, res) => res.send(process.env.MESSAGE || 'Test'))

app.listen(port, () => console.log("Server's up"))

//? pm2 vs nodemon