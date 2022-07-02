import db from '../util/database.js'

export class EmpIdentityCard {
	constructor(empId, cnicNo, cnicAttachment, cnicExpiryDate) {
		this.empId = empId
		this.cnicNo = cnicNo
		this.cnicAttachment = cnicAttachment
		this.cnicExpiryDate = cnicExpiryDate
	}

	save() {
		return db.execute(
			'INSERT INTO emp_identity_card (emp_id, cnic_no, cnic_attachment, cnic_expiry_date) VALUES (?, ?, ?, ?)',
			[this.empId, this.cnicNo, this.cnicAttachment, this.cnicExpiryDate]
		)
	}

  static findAll() {
    return db.execute('SELECT * FROM emp_identity_card')
  }

	static findByEmpId(empId) {
		return db.execute('SELECT * FROM emp_identity_card WHERE emp_id=?', [empId])
	}

	static updateIdentityCard(info) {
		return db.execute(
			'UPDATE emp_identity_card SET cnic_no=?, cnic_attachment=?, cnic_expiry_date=? WHERE emp_id=?',
			[info.cnicNo, info.cnicAttachment, info.cnicExpiryDate, info.empId]
		)
	}
}
