const express = require ('express')

const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname + "/public")))

const PORT = process.env.port || 5000

app.listen(PORT)