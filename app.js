const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let items = ["Buy Food", "Cook Food" , "Eat food"]

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("Public"))

app.get('/', function(req, res) {
  
    let today = new Date()
    let options = {weekday: "long", day: "numeric", month: "long"}
    let day = today.toLocaleDateString("en-us", options)

    res.render("list", {kindOfDay: day, addItems: items})

});

app.post("/", function(req,res){
    let item = req.body.newItem
    items.push(item)

    res.redirect("/")

})

app.listen(port, () => {
  console.log("Server is running on port " + port);
});