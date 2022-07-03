import db from '../util/database.js'

const table = 'bank'

export class Bank {
	constructor(empId, bankName, branchName, branchCode, effectiveDate) {
		this.empId = empId
		this.bankName = bankName
		this.branchName = branchName
		this.branchCode = branchCode
		this.effectiveDate = effectiveDate
	}

	save() {
		return db.execute(
			`INSERT INTO ${table} (emp_id, bank_name, bank_branch_name, bank_branch_code, bank_effective_date) VALUES (?, ?, ?, ?, ?)`,
			[
				this.empId,
				this.bankName,
				this.branchName,
				this.branchCode,
				this.effectiveDate,
			]
		)
	}

	static findAll() {
		return db.execute(`SELECT * FROM ${table}`)
	}

	static findByEmpId(empId) {
		return db.execute(`SELECT bank_id, bank_name, bank_branch_name, bank_branch_code, bank_effective_date FROM ${table} WHERE emp_id=?`, [empId])
	}

	static updateBank(info) {
		return db.execute(
			`UPDATE ${table} SET bank_name=?, bank_branch_name=?, bank_branch_code=?, bank_effective_date=? WHERE bank_id=?`,
			[
				info.bankName,
				info.branchName,
				info.branchCode,
				info.effectiveDate,
				info.bankId,
			]
		)
	}
}
