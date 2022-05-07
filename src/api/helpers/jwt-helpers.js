import jwt from 'jsonwebtoken'

export const createToken = (userId, expiry, secret) => {
	return new Promise((resolve, reject) => {
		const payload = {}
		const options = { expiresIn: expiry, audience: userId.toString() }

		jwt.sign(payload, secret, options, (err, token) => {
			if (err) {
				err.status = 500
				console.log('error in creating token')
				return reject(err)
			}
			return resolve(token)
		})
	})
}

export const verifyToken = (token, tokenSecret) => {
	return new Promise((resolve, reject) => {
		if (!token) {
			const error = new Error('Token not found')
			error.status = 403 //forbidden

			return reject(error)
		}

		jwt.verify(token, tokenSecret, (err, payload) => {
			if (err) {
				console.log(err);
				const error = new Error('error in verification')
				error.status = 400 // bad request
				return reject(error)
			}

			return resolve(payload.aud) //aud is the audience as we set in options while creating token so it presents in payload as "aud"
		})
	})
}
