const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const { url } = require('./config/database');

// hacer storage para imagenes
const storage = multer.diskStorage({
    destination: './storage/imgs/',
    filename: function(_req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() +
        path.extname(file.originalname));
    }
})

//inicializar storage
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(_req, file, cb){
        checkFileType(file, cb);
    }
}).single('person.imgUrl');

//check file Type
function checkFileType(file, cb){
    const filetypes= /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname
        (file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if(mimetype && extname){
        return cb(null, true);
    }else {
        cb('Error: Imagenes solamente ')
    }
}

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_db => console.log('Base de datos esta corriendo correctamente...'))
    .catch(err => console.log(err));

require('./config/passport')(passport);

// settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'vramhdevsystem',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes 



//base routes


// Guardar Personas o Clientes en mongodb


require('./app/routes')(app, passport);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', express.static(`${__dirname}/storage/imgs`)) 


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

