var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'code monkey' });
});
router.post('/login/', function(req, res, next) {
	var name=req.body.name;
	var password=req.body.password;
	userDao.queryByName(name)
	.then(function(data){
        console.log("pro::",data);
    	console.log(name+password);
    	if(password==data[0].password){
    		req.session.adminuser=data[0];
    		res.render('index', { title: 'code monkey' });
    	}else{
    		res.render('admin/error', { title: '登录失败' });
    	}
  		
    },function(){
 
    });
});
function  checkLogin(req, res, next) { 
	if (!req.session.adminuser) { 
	//	req.flash('error', '未登入'); 
		return  res.render('admin/login'); 
	} 
	next(); 
}

module.exports = router;
