const express = require('express');
const bodyParser = require('body-parser');


var port = process.env.PORT || 3000;



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('app');
})

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});



app.listen(port, () => {
  console.log('Server is now listening to port 3000');
});
