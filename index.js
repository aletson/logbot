const Discord = require('discord.js');
const client = new Discord.Client();
var db = require('node-mysql');
var DB = db.DB;

var messages = new DB({
    host     : process.env.DBHOST,
    user     : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.DBNAME
});
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
   //TO LOG: (message.content, message.author, message.channel.id)
});

client.login(process.env.app_token);
var http = require('http');

//Create the http server so we can ping it on Heroku

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('logbot\n'); })
  .listen(process.env.PORT || 8080);
