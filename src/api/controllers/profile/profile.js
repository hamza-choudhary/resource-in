import { validationResult } from 'express-validator'
import {
	updatePersonalInfo,
	updateQuickContact,
	updateIdentityCard,
	updateDrivingCard,
} from '../../services/profile/personalInfo.js'

export const putPersonalInfo = async (req, res, next) => {
	try {
		await updatePersonalInfo(req.body)
		res
			.status(200)
			.json({ status: 'ok', data: 'updated personal info successfully' })
	} catch (error) {
		next(error)
	}
}

export const putQuickContact = async (req, res, next) => {
	try {
		await updateQuickContact(req.body)
		res
			.status(200)
			.json({ status: 'ok', data: 'updated quick contact successfully' })
	} catch (error) {
		next(error)
	}
}

export const putIdentityCard = async (req, res, next) => {
	try {
		const updatedIdentityCard = await updateIdentityCard(req.body)
		res.status(200).json({ status: 'ok', message: updatedIdentityCard })
	} catch (error) {
		next(error)
	}
}

export const putDrivingCard = async (req, res, next) => {
	try {
		const updatedDrivingCard = await updateDrivingCard(req.body)
		res.status(200).json({ status: 'ok', message: updatedDrivingCard })
	} catch (error) {
		next(error)
	}
}
