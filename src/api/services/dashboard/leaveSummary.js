import { Leave } from '../../models/leave.js'
import { Company } from '../../models/company.js'

const findLeaves = (leaveRows, totalBalance, leaveType) => {
	let leavesAvailed = 0

	leaveRows.forEach((leave) => {
		if (leave.leave_type === leaveType) {
			leavesAvailed++
		}
	})

	const availibleLeaves = +totalBalance - leavesAvailed

	return {
		totalBalance,
		leavesAvailed,
		availibleLeaves,
	}
}

export const leaveSummary = async (empId) => {
	const [companyData] = await Company.findAll()
	const [leaveData] = await Leave.getAllLeaves(empId)

	const annualLeaves = findLeaves(
		leaveData,
		+companyData[0].annual_leaves,
		'Annual'
	)

	const unpaidLeaves = findLeaves(
		leaveData,
		+companyData[0].unpaid_leaves,
		'Unpaid'
	)

	return [
		{ type: 'Annual Leave', ...annualLeaves },
		{ type: 'Unpaid Leave', ...unpaidLeaves },
	]
}
