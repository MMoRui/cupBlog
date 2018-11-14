var article = {
	insert:'INSERT INTO article(title,content) VALUES(? , ?)',
	update:'UPDATE article SET title = ?, content = ? WHERE id = ?',
	delete: 'DELETE FROM article WHERE id=?',
	queryById: 'SELECT * FROM article WHERE id=?',
	queryAll: 'SELECT * FROM article',
	queryartbyid:"SELECT * FROM article where id=?"
};

module.exports = article;