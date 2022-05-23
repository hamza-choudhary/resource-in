import { Attendance } from '../models/attendance.js'

export const empMonthlyAbsents = async (empId) => {
	const [rows] = await Attendance.getMonthlyAttendance(empId)
	const data = rows[0]

	let absents = 0
	for (let i = 1; i < data.length; i++) {
		const date1 = new Date(data[i - 1])
    const date2 = new Date(data[i])

    const day1 = date1.getDay()
    const day2 = date2.getDay()

		if (day1 === 0 || day2 === 0 || day1 === 6 || day2 === 6) {
			continue
		}

		const diffInTime =
			new Date(data[i].check_in) - new Date(data[i - 1].check_in)
		const diffInDays = diffInTime / (1000 * 3600 * 24)

		if (diffInDays > 1) {
			absents++
		}
	}

	return absents
}
