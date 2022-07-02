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
			'SELECT emp_name, emp_date_of_birth, emp_profile_img FROM employee WHERE MONTH(emp_date_of_birth) = MONTH(NOW()) ORDER BY  DAYOFWEEK(emp_date_of_birth)'
		)
	}

	static updatePersonalInfo(info) {
		return db.execute(
			'UPDATE employee SET emp_first_name=?, emp_middle_name=?, emp_last_name=?, emp_father_husband_name=?, emp_gender=?, emp_date_of_birth=?, emp_marital_status=?, emp_religion=?, emp_nationality=?, emp_blood_group=?, emp_profile_img=?, emp_salutation=? WHERE emp_id=?',
			[
				info.firstName,
				info.middleName,
				info.lastName,
				info.fatherHusbandName,
				info.gender,
				info.dateOfBirth,
				info.maritalStatus,
				info.religion,
				info.nationality,
				info.bloodGroup,
				info.profileImg,
				info.salutation,
				info.empId,
			]
		)
	}

	static updateQuickContact(info) {
		return db.execute(
			'UPDATE employee SET emp_email=?, emp_mobile_no=?, emp_landline_no=? WHERE emp_id=?',
			[info.email, info.mobileNum, info.landLineNum, info.empId]
		)
	}
}
