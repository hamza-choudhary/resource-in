import db from '../util/database.js'

export class Leave {
	constructor(empId, leaveType, leaveDate) {
		this.empId = empId
		this.leaveType = leaveType
		this.leaveDate = leaveDate
	}

	save() {
		return db.execute(
			'INSERT INTO emp_leave (emp_id, leave_type, leave_date) VALUES (?, ?, ?)',
			[this.empId, this.leaveType, this.leaveDate]
		)
	}
	static findAll() {
		return db.execute('SELECT * FROM emp_leave')
	}

	static getAllLeaves(empId) {
		return db.execute('SELECT * FROM emp_leave WHERE emp_id=?', [empId])
	}

	static leavesAvailed(empId, leaveType) {
		return db.execute(
			'SELECT COUNT(emp_id) as leaves_count FROM emp_leave WHERE emp_id=? AND leave_type=?',
			[empId, leaveType]
		)
	}
}
