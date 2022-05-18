const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const path = require('path');
const mainRoutes = require("./routes/mainRoutes.js");

app.use("/", mainRoutes);
app.use("/bajadas.ejs", mainRoutes);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "/public")));

 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

module.exports = app;
