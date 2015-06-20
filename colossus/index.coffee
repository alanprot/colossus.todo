Colossus = require "vtex.colossus"

application = new Colossus.Application()
controller = new Colossus.Controller()

controller.get "/items", (req, res, next) ->
  res.json a: "teste"

application.register controller

module.exports = application
