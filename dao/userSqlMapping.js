var user = {
	insert:'INSERT INTO person(name, age) VALUES(? , ?)',
	update:'UPDATE person SET name = ?, age = ? WHERE id = ?',
	delete: 'DELETE FROM person WHERE id=?',
	queryById: 'SELECT * FROM person WHERE id=?',
	queryAll: 'SELECT * FROM person'
};

module.exports = user;