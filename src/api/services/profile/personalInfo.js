import { Employee } from "../../models/employee.js"

export const updatePersonalInfo = async (empInfo) => {
  console.log(empInfo);
  const [rows] = await Employee.updatePersonalInfo(empInfo)

  console.log(rows);
}