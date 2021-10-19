/* eslint-env node */

'use strict'

const express = require('express')
const minimist = require('minimist')
const open = require('open')

const DEFAULT_PORT = 4001
const argv = minimist(process.argv.slice(2), {
  boolean: ['open'],
  string: ['port'],
  default: {
    open: true,
    port: String(DEFAULT_PORT)
  }
})

const app = express()

app.use('/fingerprint.js', express.static('.'))
app.use(express.static('public'))

app.listen(argv.port, '127.0.0.1', () => {
  const url = `http://localhost:${argv.port}/`
  console.log(`Server running on ${url}`)
  if (argv.open) open(url)
})
