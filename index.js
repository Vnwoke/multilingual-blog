const express = require("express");
const i18n = require("i18n");
const cookieParser = require('cookie-parser');

const app = express();

i18n.configure({
    locales: ['en', 'fr'],
    directory: __dirname + '/locales',
    defaultLocale: 'en', 
    cookie: 'lang'
});

app.use(cookieParser());
app.use(i18n.init)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index", {'res': res})
})

app.get('/set/locale/:lang', (req, res) => {
    let lang = req.params.lang
    res.cookie('lang', lang)
    let cookie = req.cookies.lang 
    console.log(cookie)

    res.redirect('/')
})

app.listen(3002, () => {
    console.log("Server started on port 3002")
})