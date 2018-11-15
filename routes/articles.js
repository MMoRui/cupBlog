var express = require('express');
var router = express.Router();
var articleDao = require('../dao/articleDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 增加为你而战
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
//获取所有文章包括内容
router.get('/queryAll', function(req, res, next) {
	articleDao.queryAll(req, res, next);
});
//
router.get('/queryList', function(req, res, next) {
	articleDao.queryList(req, res, next);
});
//查询指定文章
router.get('/query', function(req, res, next) {
	articleDao.queryById(req, res, next);
});
//删除文章
router.post('/deleteArticle', function(req, res, next) {
	articleDao.delete(req, res, next);
});
//更新文章
router.post('/updateArticle', function(req, res, next) {
	articleDao.updateUser(req, res, next);
});
router.get('/ditle', function(req, res, next) {
	articleDao.queryById(req, res, next);
});
module.exports = router;
