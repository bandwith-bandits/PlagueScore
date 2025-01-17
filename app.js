const config = require("./config/config.js");
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const userIcons = require('./utils/loadIcons');
const Business = require('./models/business')
const Review = require('./models/review');

const userRoutes = require('./routes/users');
const businessesRoutes = require('./routes/businesses');
const reviewsRoutes = require('./routes/reviews');

const link = config.db.uri;
mongoose.connect(link, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
let icons = userIcons.loadIcons()
app.set('userIcons', icons)

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

const sessionConfig = {
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 1000*60*60*24*7,
		maxAge:1000*60*60*24*7
	}
}
app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	next();
})

app.use('/', userRoutes)
app.use('/businesses', businessesRoutes)
app.use('/businesses/:id/reviews', reviewsRoutes)

app.get('/', (req, res) => {
	res.render('home')
});




		
app.listen(process.env.PORT || 3000, () =>{
	console.log('Server started')
})