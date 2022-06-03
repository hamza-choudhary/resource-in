import express from 'express'
import { body } from 'express-validator'
import {
	postAttendanceSummary,
	postLeaveSummary,
} from '../controllers/dashboard.js'

const router = express.Router()

router.post('/attendance-summary', postAttendanceSummary)
router.post('/leave-summary', postLeaveSummary)

export { router as dashboardRoutes }
