// import from node_modules
const express = require('express')

// blijkbaar bestaat er een functie express(), 
// ik ga dit toevoegen in de variable app
// en later settings aan toe voegen
const app = express()


app.get('/', (req, res) => {
  res.send('Hello Collin!')
})

console.log("API IS UP AND RUNNING, BABY....")

app.listen(3000)