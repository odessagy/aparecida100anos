// Instanciando o express
const express = require("express");
const app = express();

const path = require("path");

// View Engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use('/dist',express.static('dist'));

// Rota principal
app.get("/", (req,res) =>{
    res.render("index");
})

app.listen(8181,() =>{
    console.log("o servidor está rodando");
})