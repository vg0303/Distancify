const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyparser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req,res) => {

})

server.listen(process.env.PORT || 8000);