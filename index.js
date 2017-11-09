const Discord = require('discord.js');
const client = new Discord.Client();
var db = require('mysql');
var messages = mysql.createConnection({
    host     : process.env.DBHOST,
    user     : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.DBNAME
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    connection.connect();
    var post = {message: message.content, author_id: message.author, channel_id: message.channel.id};
    connection.query('INSERT INTO messages (message, author_id, channel_id) VALUES ?', post, function(error, results, fields) {
        if(error) throw error;
    });
    connection.end(function(error) {
        if(error) throw error;
    });
});

client.login(process.env.app_token);
var http = require('http');

//Create the http server so we can ping it on Heroku

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('logbot\n'); })
  .listen(process.env.PORT || 8080);
});

//TODO The real neat trick here is now that this is done let's add some routes so that logbot is searchable right here.
