Colossus = require "vtex.colossus"

application = new Colossus.Application()
controller = new Colossus.Controller()

todos = [];

controller.get '/items', (req, res) ->
  res.json todos

controller.post "/items", (req, res, next) ->
  todos.push req.body.item
  res.json todos

application.register controller

module.exports = application
