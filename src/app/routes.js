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
    app.get('/cargo', (req, res) => {
        res.render('cargo', {
            message: req.flash('signupMessage')
        });
    });
    app.get('/compania', (req, res) => {
        res.render('compania', {
            message: req.flash('signupMessage')
        });
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

//---------------------------------------------------------

//Modulo de Cargo -------------------------------------

    const Cargos = require('./models/charge');

    app.get('/chargeshow', async (req, res) => {
        const Cargo_1 = await Cargos.find();
        console.log(Cargo_1);
        res.render('chargeshow', {
            Cargo_1
        });
    });

     app.post('/chargeshow', async (req, res) => {
        const Cargo_2 = await new Cargos(req.body); 
        Cargo_2.save();
        req.flash('Guardado')
        res.redirect('/chargeshow')
     });

//---------------------------------------------------------

//Modulo de Compañia------------------------------------

const Companies = require('./models/company');

app.get('/companieshow', async (req, res) => {
    const Compa_1 = await Companies.find();
    console.log(Compa_1);
    res.render('companieshow', {
        Compa_1
    });
});

 app.post('/companieshow', async (req, res) => {
    const Compa_2 = await new Companies(req.body); 
    Compa_2.save();
    req.flash('Guardado')
    res.redirect('/companieshow')
 });

//---------------------------------------------------------

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
