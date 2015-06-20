Colossus = require "vtex.colossus"

application = new Colossus.Application()
controller = new Colossus.Controller()

controller.get '/items', (req, res) ->
  res.json items: [
    id: 0, name: 'Example 1',
    id: 1, name: 'Example 2'
  ]

application.register controller

module.exports = application
