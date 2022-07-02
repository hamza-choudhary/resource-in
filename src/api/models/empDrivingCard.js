import db from '../util/database.js'

export class EmpDrivingCard {
	constructor(empId, licenseNum, licenseAttachment, licenseExpiryDate) {
		this.empId = empId
		this.licenseNum = licenseNum
		this.licenseAttachment = licenseAttachment
		this.licenseExpiryDate = licenseExpiryDate
	}

	save() {
		return db.execute(
			'INSERT INTO emp_driving_card (emp_id, driving_license_no, driving_license_attachment, driving_license_expiry_date) VALUES (?, ?, ?, ?)',
			[this.empId, this.licenseNum, this.licenseAttachment, this.licenseExpiryDate]
		)
	}

  static findAll() {
    return db.execute('SELECT * FROM emp_driving_card')
  }

	static findByEmpId(empId) {
		return db.execute('SELECT * FROM emp_driving_card WHERE emp_id=?', [empId])
	}

	static updateDrivingCard(info) {
		return db.execute(
			'UPDATE emp_driving_card SET driving_license_no=?, driving_license_attachment=?, driving_license_expiry_date=? WHERE emp_id=?',
			[info.licenseNum, info.licenseAttachment, info.licenseExpiryDate, info.empId]
		)
	}
}
