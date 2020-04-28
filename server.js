const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const DeezerStrategy = require('passport-deezer').Strategy;
const port = process.env.PORT || 5000;

require('dotenv').config()

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new DeezerStrategy({
  clientID: process.env.DEEZER_CLIENT_ID,
  clientSecret: process.env.DEEZER_CLIENT_SECRET,
  callbackURL: `http://localhost:${port}/callback`,
  scope: ['basic_access', 'email', 'offline_access']
},

function(accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    return done(null, profile);
  });
}
));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/deezer',
  passport.authenticate('deezer'),
  function(req, res){
  }
);

app.get('/callback',
  passport.authenticate('deezer', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


if(process.env.NODE_ENV === 'development') {
  app.use(cors())
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})

