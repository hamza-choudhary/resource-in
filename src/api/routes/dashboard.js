import express from 'express'
import { body } from 'express-validator'
import {
	postAttendanceSummary,
	postLeaveSummary,
	postCheckInTrends
} from '../controllers/dashboard.js'

const router = express.Router()

router.post('/attendance-summary', postAttendanceSummary)
router.post('/leave-summary', postLeaveSummary)
router.post('/checkin-trends', postCheckInTrends)

export { router as dashboardRoutes }
