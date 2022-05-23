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
}
