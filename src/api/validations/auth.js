import { User } from '../models/user.js'

export const getUserByEmail = async (email) => {
	const [rows] = await User.findByEmail(email)
	return rows
}

