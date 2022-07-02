import { Employee } from '../../models/employee.js'
import { EmpIdentityCard } from '../../models/empIdentityCard.js'
import { EmpDrivingCard } from '../../models/empDrivingCard.js'

export const updatePersonalInfo = async (empInfo) => {
	await Employee.updatePersonalInfo(empInfo)
}

export const updateQuickContact = async (empInfo) => {
	await Employee.updateQuickContact(empInfo)
}

export const updateIdentityCard = async (empInfo) => {
	const [rows] = await EmpIdentityCard.findByEmpId(empInfo.empId)

	//? this is because of 1-1 relation ship between employee and emp_identity_card
	if (rows.length === 0) {
		//create new resource
		const empIdCard = new EmpIdentityCard(
			empInfo.empId,
			empInfo.cnicNo,
			empInfo.cnicAttachment,
			empInfo.cnicExpiryDate
		)
		empIdCard.save()

		return 'resource inserted'
	} else {
		//update previous one
		EmpIdentityCard.updateIdentityCard(empInfo)
		return 'resource updated'
	}
}

export const updateDrivingCard = async (empInfo) => {
	const [rows] = await EmpDrivingCard.findByEmpId(empInfo.empId)

	//? this is because of 1-1 relation ship between employee and emp_identity_card
	if (rows.length === 0) {
		//create new resource
		const empIdCard = new EmpDrivingCard(
			empInfo.empId,
			empInfo.licenseNum,
			empInfo.licenseAttachment,
			empInfo.licenseExpiryDate
		)
		empIdCard.save()

		return 'resource inserted'
	} else {
		//update previous one
		EmpDrivingCard.updateDrivingCard(empInfo)
		return 'resource updated'
	}
}
