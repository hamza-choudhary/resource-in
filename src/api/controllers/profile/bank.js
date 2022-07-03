import { validationResult } from 'express-validator'
import { getBankInfo, updateBankInfo } from '../../services/profile/bank.js'

export const postBankInfo = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const bankInfo = await getBankInfo(empId)

		res.status(200).json({ status: 'ok', data: bankInfo })
	} catch (error) {
		next(error)
	}
}

export const putBankInfo = async (req, res, next) => {
	try {
		const message = await updateBankInfo(req.body)

		res.status(200).json({ status: 'ok', message })
	} catch (error) {
		//FIXME: more meaning full errors
		next(error)
	}
}
