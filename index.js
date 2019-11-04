const express = require ('express')
const app = express()
const teams = require ('./teams.json')

app.get('/teams', (request, response) => {
  response.send(teams)
})

app.get ('/teams/:filter/', (request, response) => {
  let result = teams.filter((team) => {
  let filter = request.params.filter
    return team.id == filter || team.abbreviation === filter
})
  response.send(result)
})

app.all ('*', (request,response) => {
  console.log({request})
  response.send('Not Found')
})
  
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

  