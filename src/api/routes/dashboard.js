import express from 'express'
import { body } from 'express-validator'
import {
	postAttendanceSummary,
	postLeaveSummary,
	postCheckInTrends,
	postUpcomingBirthdays,
} from '../controllers/dashboard.js'

const router = express.Router()

router.post('/attendance-summary', postAttendanceSummary)
router.post('/leave-summary', postLeaveSummary)
router.post('/checkin-trends', postCheckInTrends)
router.post('/upcoming-birthdays', postUpcomingBirthdays)

export { router as dashboardRoutes }
