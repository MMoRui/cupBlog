var express = require('express');
var router = express.Router();
var articleDao = require('../dao/articleDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 增加用户
router.post('/addArticle', function(req, res, next) {
	articleDao.add(req, res, next);
});
router.get('/addArticleMiddle', function(req, res, next) {
	res.render('addUser',{
		title:'添加用户页'
	});
});
router.get('/Article', function(req, res, next) {
	res.render('article',{
		title:'添加文'
	});
});
//查看全部用户
router.get('/queryAll', function(req, res, next) {
	articleDao.queryAll(req, res, next);
});
//查询指定用户
router.get('/query', function(req, res, next) {
	articleDao.queryById(req, res, next);
});
//删除用户 
router.get('/deleteArticle', function(req, res, next) {
	articleDao.delete(req, res, next);
});
//更新用户信息
router.post('/updateArticle', function(req, res, next) {
	articleDao.updateUser(req, res, next);
});
router.get('/ditle', function(req, res, next) {
	articleDao.queryById(req, res, next);
});
module.exports = router;
