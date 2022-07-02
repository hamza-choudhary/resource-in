import express from 'express'
import { body } from 'express-validator'
import { putPersonalInfo, putQuickContact, putIdentityCard, putDrivingCard } from '../controllers/profile.js'

const router = express.Router()

router.put('/update-personal-info', putPersonalInfo)
router.put('/update-quick-contact', putQuickContact)
router.put('/update-identity-card', putIdentityCard)
router.put('/update-driving-card', putDrivingCard)

export { router as profileRoutes }
