import express from 'express'
import { body } from 'express-validator'
import {
	putPersonalInfo,
	putQuickContact,
	putIdentityCard,
	putDrivingCard,
} from '../controllers/profile/profile.js'
import { postBankInfo, putBankInfo } from '../controllers/profile/bank.js'

const router = express.Router()

//profile info main page
router.put('/update-personal-info', putPersonalInfo)
router.put('/update-quick-contact', putQuickContact)
router.put('/update-identity-card', putIdentityCard)
router.put('/update-driving-card', putDrivingCard)

//individual pages nested inside profile
router.post('/bank', postBankInfo)
router.put('/update-bank', putBankInfo)

export { router as profileRoutes }
