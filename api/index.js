const express = require('express')
const api = express.Router()
const empresa = require('./empresa')
const db = require('../db')
let services

const config = require('../config')

api.use('*', async (req, res, next) => {
    if (!services) {
      try {
        services = await db(config)
      } catch (e) {
        return next(e)
      }
    }
    req._services = services
    return next()
})
api.use('/empresa', empresa)

module.exports = api