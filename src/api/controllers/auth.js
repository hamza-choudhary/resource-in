import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import { Employee } from '../models/employee.js'
import { getUserByEmail } from '../validations/auth.js'
import { createToken, verifyToken } from '../helpers/jwt-helpers.js'

export const putSignupUser = async (req, res, next) => {
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
		const isUser = await getUserByEmail(email)
		if (isUser.length >= 1) {
			const error = new Error('Email Already Exist')
			error.status = 208
			throw error
		}
		const hashedPassword = await bcrypt.hash(password, 12)
		const user = new Employee(name, email, hashedPassword)

		const response = await user.save()

		//* return response
		return res.status(201).json(response)
	} catch (error) {
		next(error)
	}
}

export const postLogin = async (req, res, next) => {
	const email = req.body.email
	const password = req.body.password

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		const error = new Error(errors.array()[0].msg)
		error.status = 406
		return next(error)
	}

	try {
		const [user] = await getUserByEmail(email)
		//verify email
		if (!user) {
			const error = new Error('Email not found')
			error.status = 401
			throw error
		}

		//match password
		const passwordIsEqual = await bcrypt.compare(password, user.user_password)
		if (!passwordIsEqual) {
			const error = new Error('Wrong Password')
			error.status = 401
			throw error
		}

		//generate tokens
		const accessToken = await createToken(
			user.user_id,
			process.env.ACCESS_TOKEN_EXPIRY_TIME,
			process.env.ACCESS_TOKEN_SECRET
		)

		const refreshToken = await createToken(
			user.user_id,
			process.env.REFRESH_TOKEN_EXPIRY_TIME,
			process.env.REFRESH_TOKEN_SECRET
		)

		res.status(200).json({ userId: user.user_id, accessToken, refreshToken })
	} catch (error) {
		next(error)
	}
}

export const postRefreshToken = async (req, res, next) => {
	const authHeader = req.get('Authorization')
	if (!authHeader) {
		const error = new Error('refresh Token not found.')
		error.status = 401
		next(error)
	}

	const refreshToken = authHeader.split(' ')[1]

	try {
		const userId = await verifyToken(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET
		)

		//Create new Tokens
		const accessToken = await createToken(
			userId,
			process.env.ACCESS_TOKEN_EXPIRY_TIME,
			process.env.ACCESS_TOKEN_SECRET
		)

		const newRefreshToken = await createToken(
			userId,
			process.env.REFRESH_TOKEN_EXPIRY_TIME,
			process.env.REFRESH_TOKEN_SECRET
		)

		res.status(200).json({
			userId,
			accessToken,
			refreshToken: newRefreshToken,
		})
	} catch (err) {
		next(err)
	}
}
