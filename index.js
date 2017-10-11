var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {
    });
});

var myData = require("./recipe");

function getRecipe (coffeeType) {

	switch (coffeeType){
		case "Latte":
			return  myData.Latte;
		case "Americano":
			return myData.Americano;
		case "Capuccino":
			return myData.Capuccino;
		case "Espresso":
			return myData.Espresso;

		default:
			"Unknown coffee type!";
	};

};
// app.get('/getcoffee', (req, res) => {
//     res.send("Never");
// });

app.get('/getcoffee', (req, res) => {
	var coffeeType = req.query.coffeeType;
    res.send(getRecipe (coffeeType));
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
