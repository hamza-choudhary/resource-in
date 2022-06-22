import { Employee } from '../models/employee.js'

export const getUserByEmail = async (email) => {
	const [rows] = await Employee.findByEmail(email)
	return rows
}
