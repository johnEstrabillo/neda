const router = require('express').Router();


	router.get('/about', (req, res)=>{
		res.send('About');
	});



	router.get('/e_communication_tracking_system', (req, res)=>{
		res.send('E_communication_tracking_system');
	});


module.exports = router;