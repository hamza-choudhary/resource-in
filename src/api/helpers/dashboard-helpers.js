export const convertTimeToSec = (hours, minutes, seconds) => {
	let time = +hours * 60 * 60 //sec
	time += +minutes * 60
	time += +seconds

	return time
}
