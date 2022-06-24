import express from 'express'
import { body } from 'express-validator'
import { putPersonalInfo } from '../controllers/profile.js'

const router = express.Router()

router.put('/update-personal-info', putPersonalInfo)
// router.put('/update-quick-contact', putQuickContact)
// router.put('/update-identify-card', putIdentifyCard)
// router.put('/update-driving-card', putDrivingCard)

export { router as profileRoutes }
