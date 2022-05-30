import { check } from 'express-validator'
import { Attendance } from '../../models/attendance.js'
import { convertTimeToSec } from '../../helpers/dashboard-helpers.js'

//? calculate absents
const absent = (attendance) => {
	const firstDate = attendance[0].check_in.getDate()
	const lastDate = attendance[attendance.length - 1].check_in.getDate()
	const month = attendance[0].check_in.getMonth()
	const year = attendance[0].check_in.getFullYear()

	let absents = 0
	const datesInPeriod = []
	//create all dates between first check in and last check in by employee
	for (let i = firstDate; i <= lastDate; i++) {
		datesInPeriod.push(i)
	}

	//delete days that are checked_in from array and remaining will be absents
	attendance.forEach((value) => {
		const checkInDate = value.check_in.getUTCDate()
		const presentDateIndex = datesInPeriod.indexOf(checkInDate)

		if (presentDateIndex > -1) {
			datesInPeriod.splice(presentDateIndex, 1)
		}
	})

	//count absents
	datesInPeriod.forEach((day) => {
		const date = new Date(year, month, day + 1) //node is somehow creating date of day-1 but on browser it works fine
		if (date.getUTCDay() !== 6 && date.getUTCDay() !== 0) {
			absents++
		}
	})
	return absents
}

const shortDuration = async (attendance) => {
	const [rows] = await Attendance.getConstant('EMP_WORK_DURATION')

	const workingTimeArr = rows[0].constant_value.split(':')
	const workingTime = convertTimeToSec(...workingTimeArr) //its in secs

	let shortDurations = 0

	attendance.forEach((day) => {
		const diffInTimes =
			(day.check_out.getTime() - day.check_in.getTime()) / 1000 // getTime returns time in mili seconds

		if (diffInTimes < workingTime) {
			shortDurations++
		}
	})

	return shortDurations
}

const lateAndEarlyLeft = async (attendance) => {
	const [lateArrivalRows] = await Attendance.getConstant('EMP_LATE_ARRIVAL')
	const [EarlyLeftRows] = await Attendance.getConstant('EMP_EARLY_LEFT')

	let lateArrivals = 0
	let earlyLefts = 0

	const LateTimeArr = lateArrivalRows[0].constant_value.split(':')
	const EarlyTimeArr = EarlyLeftRows[0].constant_value.split(':')

	attendance.forEach((day) => {
		const checkInDate = new Date(day.check_in.getTime()) // we cannot assign directly because of reference type as we are changing its time
		checkInDate.setHours(0)
		checkInDate.setMinutes(0)
		checkInDate.setSeconds(0)

		const checkOutDate = new Date(day.check_out.getTime())
		checkOutDate.setHours(0)
		checkOutDate.setMinutes(0)
		checkOutDate.setSeconds(0)

		const maxCheckInTime =
			checkInDate.getTime() / 1000 + convertTimeToSec(...LateTimeArr)
		const maxCheckOutTime =
			checkOutDate.getTime() / 1000 + convertTimeToSec(...EarlyTimeArr)

		//? for late arrivals
		if (day.check_in.getTime() / 1000 > maxCheckInTime) {
			lateArrivals++
		}
		//? for early left
		if (day.check_out.getTime() / 1000 < maxCheckOutTime) {
			earlyLefts++
		}
	})

	return { lateArrivals, earlyLefts }
}

export const attendanceSummary = async (empId) => {
	const [rows] = await Attendance.getMonthlyAttendance(empId)
	let attendance = rows[0]

	attendance = attendance.filter(
		(date) => date.check_in.getUTCDay() !== 6 && date.check_in.getUTCDay() !== 0
	)

	const absents = absent(attendance)
	const shortDurations = await shortDuration(attendance)
	const { lateArrivals, earlyLefts } = await lateAndEarlyLeft(attendance)

	return { absents, shortDurations, lateArrivals, earlyLefts }
}
