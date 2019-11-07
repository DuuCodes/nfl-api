// kicks out the express requirement
const express = require("express");
//allows the app to run on express
const app = express();
//allows the teams to pull from the json files
const teams = require("./teams.json");
// verifies which http port the app will be using on the browser
const port = 3000;
//allows the body json files from the bodyParser package to run
const bodyParser = require("body-parser");

app.get("/teams", (request, response) => {
  let result = request.params.map;
  console.log(map);
  response.send(result);
});

app.get("/teams/:filter/", (request, response) => {
  let result = teams.filter(team => {
    let filter = request.params.filter;
    return team.id == filter || team.abbreviation === filter;
  });
  response.send(result);
});

app.use(bodyParser.json);

app.post("/teams/:body/", bodyParser.json(), (request, response) => {
  const body = request.body || {};
  let newBodyTeams = teams.concat(body);
  if ("location" || "mascot" || "conference" || "division") {
  } else {
    request
      .status(400)
      .send(
        "For this to work it must have location, mascot, conference, division"
      );
  }
  console.log({ body });
  response.send(newBodyTeams);
});

app.all("*", (request, response) => {
  console.log({ request });
  response.send("Not Found");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
