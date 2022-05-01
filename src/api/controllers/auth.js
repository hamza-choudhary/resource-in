import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import { User } from '../models/user.js'
import { emailExist } from '../validations/auth.js'

export const postRegisterUser = async (req, res, next) => {
	const name = req.body.name
	const email = req.body.email
	const password = req.body.password

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		const error = new Error(errors.array()[0].msg)
		error.status = 406
		return next(error)
	}
	
	try {
		if (await emailExist(email)) {
			const error = new Error('Email Already Exist')
			error.status = 208
			throw error
		} 
		const hashedPassword = await bcrypt.hash(password, 12)
		const user = new User(name, email, hashedPassword)

		const response = await user.save()

		//* return response
		return res.status(201).json(response)
	} catch (error) {
		next(error)
	}
}
