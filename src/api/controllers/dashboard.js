import { validationResult } from 'express-validator'
import { Attendance } from '../models/attendance.js'
import { attendanceSummary } from '../services/dashboard/attendanceSummary.js'

export const postAbsents = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const { absents, shortDurations, lateArrivals, earlyLefts } =
			await attendanceSummary(empId)

		res.status(200).json({ absents, shortDurations, lateArrivals, earlyLefts })
	} catch (error) {
		next(error)
	}
}
