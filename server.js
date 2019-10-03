const express = require('express');
const app = express();
var exphbs = require("express-handlebars");

// Handlebars

app.engine("handlebars", exphbs({
    defaultLayout: "main"
})
);
app.set("view engine", "handlebars");

// routing
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log('server is starting at port ', 8080)
});
