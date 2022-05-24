import { Attendance } from '../models/attendance.js'

export const empMonthlyAbsents = async (empId) => {
	const [rows] = await Attendance.getMonthlyAttendance(empId)
	const data = rows[0]

	let absents = 0

	const firstDate = data[0].check_in.getDate()
	const lastDate = data[data.length - 1].check_in.getDate()
	const month = data[0].check_in.getMonth()
	const year = data[0].check_in.getFullYear()

	const currentMonthDates = []

	//create all dates between first check in and last check in by employee
	for (let i = firstDate; i <= lastDate; i++) {
		currentMonthDates.push(i)
	}

	//delete days that are checked_in
	data.forEach((value) => {
		const checkInDate = value.check_in.getUTCDate()
		const presentDateIndex = currentMonthDates.indexOf(checkInDate)

		if (presentDateIndex > -1) {
			currentMonthDates.splice(presentDateIndex, 1)
		}
	})

	//count absents
	currentMonthDates.forEach((day) => {
		const date = new Date(year, month, day + 1) //node is somehow creating date of day-1 but on browser it works fine
		if (date.getUTCDay() !== 6 && date.getUTCDay() !== 0) {
			absents++
		}
	})

	return absents
}
