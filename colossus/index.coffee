Colossus = require "vtex.colossus"

application = new Colossus.Application()
controller = new Colossus.Controller()

controller.get '/items', (req, res) ->
  res.json items: [
    id: 0, name: 'Example 1',
    id: 1, name: 'Example 2'
  ]

controller.get "/items2", (req, res, next) ->
  res.json a: "teste2"

controller.post "/items2", (req, res, next) ->
  res.json a: "teste2 post giser"

application.register controller

module.exports = application
