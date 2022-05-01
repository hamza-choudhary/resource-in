import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import { authRoutes } from './api/routes/auth.js'

const app = express()

app.use(bodyParser.json())

//Prevention from cros error
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
})

//? Routes
app.use(authRoutes)

//? Express Error Middleware
app.use((error, req, res, next) => {
	console.log('in express error middleware', error, 'in the end')
	const status = error.status || 500
	const message = error.message || 'server internal error'

	res.status(status).json({ message: message })
})

app.listen(8080)
