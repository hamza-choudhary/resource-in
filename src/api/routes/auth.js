import express from 'express'
import { body } from 'express-validator'
import { postRegisterUser } from '../controllers/auth.js'

const router = express.Router()

router.post(
	'/register',
	[
		body('name').isString().isLength({ min: 5 }).trim(),
		body('email').isEmail().withMessage('invalid email').normalizeEmail(),
		body('password', 'invalid password')
			.isLength({ min: 5 })
			.isAlphanumeric()
			.trim(),
		body('confirm-password')
			.trim()
			.custom((value, { req }) => {
				if (value !== req.body.password) {
					throw new Error('passwords not match')
				}
				return true
			}),
	],
	postRegisterUser
)

export { router as authRoutes }
