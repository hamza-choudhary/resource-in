import { validationResult } from 'express-validator'
import { Attendance } from '../models/attendance.js'
import { empMonthlyAbsents } from '../services/dashboard.js'

export const postAbsents = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const absents = await empMonthlyAbsents(empId)

		res.status(200).json({ absents })
	} catch (error) {
		next(error)
	}
}
