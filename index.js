/* eslint-env node */

'use strict'

const express = require('express')
const minimist = require('minimist')
const open = require('open')
const os = require('os')
const path = require('path')
const extraRoutes = require('./your-server-code')

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

app.use('/fingerprint.js', express.static(path.join(__dirname, 'fingerprint.js'), { redirect: false }))
app.use(express.static('public'))
app.use(extraRoutes)

app.listen(argv.port, '0.0.0.0', () => {
  console.log('Server running on:')
  const url = `http://localhost:${argv.port}/`
  console.log(`  ${url}`)
  for (const iface of Object.values(os.networkInterfaces()).flat(1)) {
    if (iface.family === 'IPv4') {
      console.log(`  http://${iface.address}:${argv.port}/`)
    }
  }
  if (argv.open) open(url)
})
