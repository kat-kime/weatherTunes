/*
 * Name:          Kat Kime
 * Date:          May 25, 2020
 * Description:   A JS file to handle all of the get/post requests recieved on
 *                the index page.
*/

/*
 * Setting up Express test
 */

 var express = require('express');
 var exphbs = require('express-handlebars');

 var app = express();
 var hbs = exphbs.create({defaultLayout: 'main'});

 // Registering hbs.engine with Express app
 app.engine('handlebars', exphbs());
 app.set('view engine', 'handlebars');

 // Query parser
 app.use(express.urlencoded({ extended: false}));
 app.use(express.json());

 // Setting up a folder for static files
 app.use(express.static('public'));

 // Setting the port
 app.set('port', 3884);

 /*
  * Setting up the functions
  */
var apiCall;


 /*
  * Setting the Views
  */
app.get('/', function(request, response) {
  context = {};
  context.siteTitle = "Welcome to Weather Tunes";
  context.script = "weather.js";
  context.clowdy = "Clowdy-Artist.png";
  context.rainy = "Rainy-Artist.png";
  context.snowy = "Snowy-Artist.png";
  context.sunny = "Sunny-Artist.png";
  response.render('home', context);
});

app.get('/clowdy', function(request, response) {
  context = {};
  context.artistList = clowdyList;
  context.picture = "Clowdy-Artist.png";
  context.siteTitle = 'Clowdy Tunes';

  response.render('artists', context);
})

app.get('/rainy', function(request, response) {
  context = {};
  context.artistList = rainyList;
  context.picture = "Rainy-Artist.png";
  context.siteTitle = 'Rainy Rhythms';

  response.render('artists', context);
})

app.get('/sunny', function(request, response) {
  context = {};
  context.artistList = sunnyList;
  context.picture = "Sunny-Artist.png";
  context.siteTitle = 'Sunny Sounds';

  response.render('artists', context);
})

app.get('/snowy', function(request, response) {
  context = {};
  context.artistList = snowyList;
  context.picture = "Snowy-Artist.png";
  context.siteTitle = 'Snowy Songs';

  response.render('artists', context);
})



 /*
  * Handling Errors
  */

 app.use(function(request, response) {
   response.type('text/plain');
   response.status(404);
   response.send('404 - Not Found');
 });

 app.use(function(err, request, response, next) {
   console.error(err.stack);
   response.type('text/plain');
   response.status(500);
   response.send('500 - Server Error');
 });

 // Adding a listener
 app.listen(app.get('port'), function() {
   console.log('Express started on http://localhost:' + app.get('port') +
 '; press Ctrl-C to terminate.');
});


/*
 * Artist Lists
 */
 var clowdyList = [
   {
     artist: "TV Girl",
     title: "Song About Me"
   },
   {
     artist: "Take 'Em Up",
     title: "Shit Robot",
   },
   {
     artist: "Once in a Lifetime",
     title: "Talking Heads",
   },
   {
     artist: "A Boogie Wit da Hoodie",
     title: "Look Back At It",
   },
   {
     artist: "Glass Aniimals",
     title: "Gooey"
   },
   {
     artist: "Take a Daytrip",
     title: "I Don't Mind"
   },
   {
     artist: "VanJess",
     title: "Easy"
   },
   {
     artist: "Mac DeMarco",
     title: "Freaking Out the Neighborhood"
   },
   {
     artist: "Mount Kimbie",
     title: "T.A.M.E.D."
   },
   {
     artist: "Cults",
     title: "Always Forever"
   }
 ];

 var rainyList = [
   {
     artist: "Total Science",
     title: "So Addicted"
   },
   {
     artist: "Fort Romeau",
     title: "Secrets & Lies",
   },
   {
     artist: "Chrome Sparks",
     title: "Luna Luxor",
   },
   {
     artist: "Chrome Sparks",
     title: "Wings",
   },
   {
     artist: "Joe Goddard",
     title: "Truth is Light"
   },
   {
     artist: "Mssingo",
     title: "Fones"
   },
   {
     artist: "Aphex Twin",
     title: "IZ-US"
   },
   {
     artist: "Brothomstates",
     title: "Mdmx"
   },
   {
     artist: "XXYYXX",
     title: "DMX"
   },
   {
     artist: "deadmau5",
     title: "Faxing Berlin"
   }
 ];

 var sunnyList = [
   {
     artist: "A.R. Kane",
     title: "A Love from Outer Space"
   },
   {
     artist: "Girls",
     title: "Lust for Life",
   },
   {
     artist: "TV Girl",
     title: "A Song About Me",
   },
   {
     artist: "Tallking Heads",
     title: "Once in a Lifetime",
   },
   {
     artist: "The Replacements",
     title: "I Will Dare"
   },
   {
     artist: "New Order",
     title: "Bizarre Love Triangle"
   },
   {
     artist: "Watch The Duck",
     title: "There You Are"
   },
   {
     artist: "Chaos Chaos",
     title: "Terry Fold"
   },
   {
     artist: "Hot Hot Heat",
     title: "Bandages"
   },
   {
     artist: "Mac DeMarco",
     title: "Freaking Out the Neighborhoos"
   }
 ];

 var snowyList = [
   {
     artist: "Anna Wise",
     title: "Some Mistakes"
   },
   {
     artist: "Talking Heads",
     title: "Born Under Punches (The Heat Goes On)"
   },
   {
     artist: "Deniece Williams",
     title: "Free"
   },
   {
     artist: "Solange",
     title: "Almeda"
   },
   {
     artist: "Glass Animals",
     title: "Gooey"
   },
   {
     artist: "OTR",
     title: "Close"
   },
   {
     artist: "Still Woozy",
     title: "Goodie Bag"
   },
   {
     artist: "Billy Lemos",
     title: "12:34 AM"
   },
   {
     artist: "Bryson Tiller",
     title: "Don't"
   },
   {
     artist: "Kingdom",
     title: "Down for Whatever"
   }
 ];
