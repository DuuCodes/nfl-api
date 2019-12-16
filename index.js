const express = require('express')
const models = require('./models')

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`))


app.get('/teams', async (request, response) => {
    const teams = await models.Teams.findAll()

    response.send(teams)
})

app.get('/teams/:placeholder', (request, response) => {
    let result = teams.filter((team) => {
        const filter = request.params.placeholder
        return team.id == filter || 
        team.location == filter ||
        team.mascot == filter ||
        team.abbreviation == filter ||
        team.conference == filter ||
        team.division == filter
    })
    response.send(result)
})

app.post('/teams', (request, response) => {
    const team = {
        id: request.body.id,
        location: request.body.location,
        mascot: request.body.mascot,
        abbreviation: request.body.abbreviation,
        conference: request.body.conference,
        division: request.body.division
    }
    teams.push(team)
    response.send(team)
})

app.all('*', (request, response) => {
    response.sendStatus(404)
})