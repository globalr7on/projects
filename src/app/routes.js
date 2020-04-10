module.exports = (app, passport) => {

    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/Login', (req, res) => {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', (req, res) => {
        res.render('signup', {
            message: req.flash('signupMessage')
        });
    });
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile', {
            user: req.user
        });
    });

    app.get('/person', (req, res) => {
        res.render('person', {
            message: req.flash('signupMessage')
        });
    });
    app.get('/abc', (req, res) => {
        
        res.render('abc');
    });

    app.get('/actnac', (req, res) => {
    
        res.render('actnac');
    });

/* GET Userlist page. */
const Profiledb = require("./models/profile");
app.get('/profiledata', async (req, res) =>{
   const Profiles = await Profiledb.find();
   console.log(Profiles);
         res.render('profiledata', { 
            Profiles
          });
   });
   app.post('/profiledata', async (req, res) => {
    const Profiles = await new Profiledb(req.body); 
    Profiles.save();
    req.flash('Guardado')
    res.redirect('/profiledata')
 });

//Modulo de Personas -------------------------------------

    const Persons = require('./models/profile');

    app.get('/persondata', async (req, res) => {
        const Person_1 = await Persons.find();
        //console.log(Person_1);
        res.render('persondata', {
            Person_1
        });
    });

     app.post('/persondata', async (req, res) => {
        const Person_2 = await new Persons(req.body); 
        Person_2.save();
        req.flash('Guardado')
        res.redirect('/persondata')
     });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
}
