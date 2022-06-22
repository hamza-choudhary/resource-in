import db from '../util/database.js'

export class Employee {
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

	static monthlyBirthdays() {
		return db.execute(
			'SELECT emp_name, emp_date_of_birth FROM employee WHERE MONTH(emp_date_of_birth) = MONTH(NOW()) ORDER BY  DAYOFWEEK(emp_date_of_birth)'
		)
	}
}
