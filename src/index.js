// Instanciando o express
const express = require("express");
const app = express();

// View Engine
app.set('view engine','ejs');

// Rota principal
app.get("/", (req,res) =>{
    res.render("index");
})

app.listen(8181,() =>{
    console.log("o servidor está rodando");
})