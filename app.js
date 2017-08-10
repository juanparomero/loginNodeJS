// API REST del servidor
// funciones necesarias de tratamiento en toolsserv.js
// conexion a bbdd en connmysql.js
var express = require("express");
var bodyParser = require("body-parser");
var app = express()
var port = "8080";


var connmysql = require("/modulos/connmysql");
var tools = require("/modulos/toolsserv");
var SHA256 = require("crypto-js/sha256");
var CSPRNG = require('csprng');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.set("view engine", "jade");
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.listen(port, 
			function(){
				console.log("index: El servidor esta funcionando correctamente en http://localhost:" + 
				port + "/");
});

//=====================================================================================

app.get("/", function(peticion, respuesta){
	respuesta.status(200,{'content-type': 'text/html'});
	respuesta.render("index");
});
app.get("/home", function(peticion, respuesta){
	respuesta.status(200,{'content-type': 'text/html'});
	respuesta.render("home");
});
app.post("/register", function(peticion, respuesta){
	console.log("INFO-register: params",peticion.params)
	console.log("INFO-register: body",peticion.body)

	var data = tools.dataUserToRegister(peticion.body);

	connmysql.registerUser(data, function(err, resultado){
		
			if (err) {
				console.log(err.message)
				respuesta.status(409,{'content-type': 'text/html'});
				respuesta.render("error",
								{msgerror: err.message});
			}else{
				respuesta.status(201,{'content-type': 'text/html'});
				respuesta.render("home");
			}
		
	});
});

app.get("/faq", function(peticion, respuesta){
	respuesta.status(200,{'content-type': 'text/html'});
	respuesta.render("faq");
});
//=========================================================================================================

