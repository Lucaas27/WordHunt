import express from 'express';
import cors from 'cors'
import { randomWordsRoute } from './routes/randomWords.js'

export const app = express()
app.use(cors)
app.use('/api/words', randomWordsRoute)