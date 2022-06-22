import { check } from 'express-validator'
import { DateTime } from 'luxon'
import { Attendance } from '../../models/attendance.js'
import { Company } from '../../models/company.js'

//? calculate attendance
const findAttendance = (data) => {
	const attendance = []

	data.forEach((value) => {
		const checkInDT = DateTime.fromJSDate(value.check_in)
		const checkOutDT = DateTime.fromJSDate(value.check_out)
		//! we can also define weekdays for different countries by creating a table or attribute for company  and use them insted of 6/7 no of saturday and sunday
		//!we can also check holidays here as well by making a sperate function for it
		//* we have to just check all types of holidays here so all other things like late/early_arrival, missing punch all such things will be adjusted automaticaly
		if (+checkInDT.toFormat('c') !== 6 && +checkInDT.toFormat('c') !== 7) {
			attendance.push({ checkInDT, checkOutDT })
		}
	})

	return attendance
}

//? find absents
const findAbsents = (attendance) => {
	let firstDate = attendance[0].checkInDT
	let lastDate = attendance[0].checkInDT

	attendance.forEach((value) => {
		if (value.checkInDT < firstDate) {
			firstDate = value.checkInDT
		}
		if (value.checkInDT > lastDate) {
			lastDate = value.checkInDT
		}
	})

	let tempDT = DateTime.fromISO(firstDate.toISO())
	let noOfDaysInPeriod = 0

	for (let i = firstDate.toFormat('d'); i <= lastDate.toFormat('d'); i++) {
		//! we can also check for specific country for different weekdays
		if (+tempDT.toFormat('c') !== 6 && +tempDT.toFormat('c') !== 7) {
			noOfDaysInPeriod++
		}
		tempDT = tempDT.plus({ days: 1 })
	}
	//count absents
	let absents = noOfDaysInPeriod - attendance.length

	return absents
}

// const findShortDuration = async (attendance) => {}

// const shortDuration = async (attendance) => {
// 	const [rows] = await Attendance.getConstant('EMP_WORK_DURATION')

// 	const workingTimeArr = rows[0].constant_value.split(':')
// 	const workingTime = convertTimeToSec(...workingTimeArr) //its in secs

// 	let shortDurations = 0

// 	attendance.forEach((day) => {
// 		const diffInTimes =
// 			(day.check_out.getTime() - day.check_in.getTime()) / 1000 // getTime returns time in mili seconds

// 		if (diffInTimes < workingTime) {
// 			shortDurations++
// 		}
// 	})

// 	return shortDurations
// }

const findLateAndEarlyLeft = async (attendance) => {
	const [rows] = await Company.findAll()

	const expectedCheckOutTime = rows[0].expected_check_out
	const expectedCheckInTime = rows[0].expected_check_in

	let lateArrivals = 0
	let earlyLefts = 0

	attendance.forEach((day) => {
		const checkInTime = day.checkInDT.toFormat('TT')
		const checkOutTime = day.checkOutDT.toFormat('TT')

		if (checkInTime > expectedCheckInTime) {
			lateArrivals++
		}
		if (checkOutTime < expectedCheckOutTime) {
			earlyLefts++
		}
	})

	return { lateArrivals, earlyLefts }
}

export const attendanceSummary = async (empId) => {
	const [rows] = await Attendance.getMonthlyAttendance(empId)
	const attendance = findAttendance(rows[0])

	const absents = findAbsents(attendance)
	const { lateArrivals, earlyLefts } = await findLateAndEarlyLeft(attendance)

	return { absents, lateArrivals, earlyLefts }
}
