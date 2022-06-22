import { DateTime } from 'luxon'
import { Attendance } from '../../models/attendance.js'
import { Company } from '../../models/company.js'

export const checkInTrends = async (empId) => {
	//there should be a procedure which can accept the trends "from" which date to select rows "till" date
	const [attendanceRows] = await Attendance.getMonthlyAttendance(empId)
	const [companyRows] = await Company.findAll()

	const attendance = attendanceRows[0]
	const companyConstants = await companyRows[0]

	const graphData = []

	attendance.forEach((value) => {
		const expectedCheckInTime = DateTime.fromISO(
			companyConstants.expected_check_in
		)

		const checkInDT = DateTime.fromJSDate(value.check_in)
		const expectedCheckInDT = DateTime.fromObject({
			year: checkInDT.year,
			month: checkInDT.month,
			day: checkInDT.day,
			hour: expectedCheckInTime.hour,
			minute: expectedCheckInTime.minute,
			second: expectedCheckInTime.second,
		})
		//the reason we are sending utc bcz if we format date here it will be of according to iso of server not client time
		const x = checkInDT.toUTC().toString()
		//y = checkin time - expected time
		const diffInMinutes = checkInDT
			.diff(expectedCheckInDT, 'minutes')
			.toObject().minutes
		const y = parseInt(diffInMinutes)

		graphData.push({ x, y })
	})

	return graphData
}
