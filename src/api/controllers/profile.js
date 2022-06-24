import { validationResult } from 'express-validator'
import { updatePersonalInfo } from '../services/profile/personalInfo.js'

export const putPersonalInfo = async (req, res, next) => {
	try {
    console.log('hello');
		const empBirthdaysData = await updatePersonalInfo(req.body)
    //FIXME: send some response
		res.status(200).json({ status: 'ok', data: empBirthdaysData })
	} catch (error) {
		next(error)
	}
}
