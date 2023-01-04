const express = require('express');
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts')

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());


app.get('/', (req, res)=>{
    res.render('index', {title: "Mori International Agency Corp."})
})

app.get('/page/aboutus', (req, res)=>{
    res.render('page/aboutus')
})
app.get('/page/client', (req, res)=>{
    res.render('page/client')
})
app.get('/page/announcement', (req, res)=>{
    res.render('page/announcement')
})
app.get('/page/jobopenings', (req, res)=>{
    res.render('page/jobopenings')
})
app.get('/page/services', (req, res)=>{
    res.render('page/services')
})
app.get('/page/faq', (req, res)=>{
    res.render('page/faq')
})
app.get('/page/contactus', (req, res)=>{
    res.render('page/contactus')
})


app.listen(port, ()=> {
    console.log('Listen to port', port)
})