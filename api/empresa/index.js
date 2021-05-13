const api = require('express').Router()
const { getAll, getById } = require('./controllers')

api.get('/', getAll)
api.get('/:id', getById)

module.exports = api