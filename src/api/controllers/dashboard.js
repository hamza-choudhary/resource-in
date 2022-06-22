import { validationResult } from 'express-validator'
import { Attendance } from '../models/attendance.js'
import { attendanceSummary } from '../services/dashboard/attendanceSummary.js'
import { leaveSummary } from '../services/dashboard/leaveSummary.js'
import { checkInTrends } from '../services/dashboard/checkInTrends.js'
import { upcomingBirthdays } from '../services/dashboard/upcomingBirthdays.js'

export const postAttendanceSummary = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const attendanceSummaryData = await attendanceSummary(empId)

		res.status(200).json({
			status: 'ok',
			data: { ...attendanceSummaryData },
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

export const postCheckInTrends = async (req, res, next) => {
	try {
		const empId = req.body.empId
		const checkInTrendsData = await checkInTrends(empId)
		res.status(200).json({ status: 'ok', data: checkInTrendsData })
	} catch (error) {
		next(error)
	}
}

export const postUpcomingBirthdays = async (req, res, next) => {
	try {
		const empBirthdaysData = await upcomingBirthdays()
		res.status(200).json({ status: 'ok', data: empBirthdaysData })
	} catch (error) {
		next(error)
	}
}
