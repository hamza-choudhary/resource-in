import { Bank } from '../../models/bank.js'

export const getBankInfo = async (empId) => {
	const [rows] = await Bank.findByEmpId(empId)

	//TODO: this error should be added in all places if there is no data found
	if (rows.length === 0) {
		return []
	}

	return rows
}

export const updateBankInfo = async (bankInfo) => {
	const [response] = await Bank.updateBank(bankInfo)

	//FIXME: do the same code in other updated places as well
	if (response.affectedRows === 0) {
		console.log('hello')
		throw new Error('resource not found')
	} else if (response.affectedRows >= 1 && response.changedRows === 0) {
		throw new Error('updated data is already in database')
	}

	return 'resource updated'
}
