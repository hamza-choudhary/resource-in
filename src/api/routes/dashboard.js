import express from 'express'
import {body} from 'express-validator'
import { postAbsents } from '../controllers/dashboard.js'

const router = express.Router()

router.post('/absents', postAbsents)

export { router as dashboardRoutes }