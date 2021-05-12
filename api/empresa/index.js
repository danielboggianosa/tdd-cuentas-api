const api = require('express').Router()
const { getAll } = require('./controllers')

api.get('/', getAll)

module.exports = api