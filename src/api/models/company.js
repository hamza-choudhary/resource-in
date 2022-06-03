import db from '../util/database.js'

export class Company {
	constructor(companyName, annualLeaves, unpaidLeaves) {
		this.companyName = companyName
		this.annualLeaves = annualLeaves
		this.unpaidLeaves = unpaidLeaves
	}

	save() {
		return db.execute(
			'INSERT INTO company (company_name, annual_leaves, unpaid_leaves) VALUES (?, ?, ?)',
			[this.companyName, this.annualLeaves, this.unpaidLeaves]
		)
	}
	static findAll() {
		return db.execute('SELECT * FROM company')
	}
}
