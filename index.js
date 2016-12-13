const express = require('express')
const app = require('express')()
const path = require('path')

app.use(express.static(path.join(__dirname + '/')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen()
