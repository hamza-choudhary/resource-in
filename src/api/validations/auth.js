import { User } from '../models/user.js'

export const emailExist = async (email) => {
	const [rows] = await User.findByEmail(email)

	return rows.length >= 1
}
