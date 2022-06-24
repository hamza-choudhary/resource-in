import { DateTime } from 'luxon'
import { Employee } from '../../models/employee.js'

export const upcomingBirthdays = async () => {
	const [rows] = await Employee.monthlyBirthdays()

  //TODO: find a way to send profile img as well

	rows.forEach((employee) => {
		const dt = DateTime.fromJSDate(employee.emp_date_of_birth)
		const dob = dt.toFormat('LLL') + ' ' + dt.toFormat('dd')
		employee.emp_date_of_birth = dob
    delete employee.emp_profile_img
	})

	return rows
}