var express = require( 'express' );
 
var app = module.exports = express.createServer();
 
// mongoose setup
//require( './db' );
 
// Configuration
// remove methodOverride, add favicon, logger and move static middleware upper
app.configure( function (){
  app.set( 'views', __dirname + '/views' );
  app.set( 'view engine', 'ejs' );
  app.use( express.favicon());
  app.use( express.static( __dirname + '/public' ));
  app.use( express.logger());
  app.use( express.bodyParser());
  app.use( app.router );
});
 
app.configure( 'development', function (){
  app.use( express.errorHandler({ dumpExceptions : true, showStack : true }));
});
 
app.configure( 'production', function (){
  app.use( express.errorHandler());
});
 
// Routes
var routes = require( './routes' );
 
app.get( '/', routes.index );
 
app.listen( 3000, function (){
  console.log( 'Express server listening on port %d in %s mode', app.address().port, app.settings.env );
});
