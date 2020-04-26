import * as functions from 'firebase-functions'
import firebase from 'firebase-admin'
import express from 'express'
import cors from 'cors'

import { createPaymentIntent } from './routes/payment_intent'

firebase.initializeApp()

const app = express()
app.use(cors({ origin: true }))
app.post('/', createPaymentIntent)

exports.payment_intent = functions.https.onRequest(app)
