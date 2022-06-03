import { validationResult } from 'express-validator'
import { Attendance } from '../models/attendance.js'
import { attendanceSummary } from '../services/dashboard/attendanceSummary.js'
import { leaveSummary } from '../services/dashboard/leaveSummary.js'

export const postAttendanceSummary = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const { absents, shortDurations, lateArrivals, earlyLefts } =
			await attendanceSummary(empId)

		res.status(200).json({
			status: 'ok',
			data: { absents, shortDurations, lateArrivals, earlyLefts },
		})
	} catch (error) {
		next(error)
	}
}

export const postLeaveSummary = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const leaveSummaries = await leaveSummary(empId)
		res.status(200).json({ status: 'ok', data: leaveSummaries })
	} catch (error) {
		next(error)
	}
}
