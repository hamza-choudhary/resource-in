import db from '../util/database.js'

export class Attendance {
	constructor(checkIn, checkOut) {
		this.checkIn = checkIn
		this.checkOut = checkOut
	}

	save() {
		return db.execute(
			'INSERT INTO attendance (check_in, check_out) VALUES (?, ?)',
			[this.checkIn, this.checkOut]
		)
	}
	static findAll() {
		return db.execute('SELECT * FROM attendance')
	}

	static getMonthlyAttendance(empId) {
		return db.execute('CALL sp_monthly_attendance(?)', [empId])
	}

	static getConstant(key) {
		//FIXME: should also receieve company_id as parameter

		return db.execute(
			'SELECT constant_value FROM company_constants WHERE constant_key=?',
			[key]
		) //sql should also check company_id in where  when passed
	}
}
