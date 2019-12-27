const express = require('express');
const bodyParser = require('body-parser');
const nedaRouter = require('./routes/neda');


var port = process.env.PORT || 3000;



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'))

app.use('/neda', nedaRouter)

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('app');
})


app.get('*', (req, res)=>{
	res.render('404');
});


app.listen(port, () => {
  console.log('Server is now listening to port 3000');
});
