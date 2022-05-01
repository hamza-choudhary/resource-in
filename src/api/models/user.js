import db from '../util/database.js'

export class User {
	constructor(name, email, password) {
		this.name = name
		this.email = email
		this.password = password
	}

	save() {
		return db.execute(
			'INSERT INTO user (user_name, user_email, user_password) VALUES (?, ?, ?)',
			[this.name, this.email, this.password]
		)
	}

	static findByEmail(email) {
		return db.execute('SELECT * FROM user WHERE user_email=?', [email])
	}

	static findAll() {
		return db.execute('SELECT * FROM user')
	}
}
