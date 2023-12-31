import express from 'express';
import cors from 'cors'
import { randomWordsRoute } from './routes/randomWords.js'
import { dictionaryRoute } from './routes/dictionary.js';
import { reqLogger } from './helpers/middleware.js';

export const app = express()
app.use(cors())
app.use(reqLogger())
app.use('/api/words', randomWordsRoute)
app.use('/api/check', dictionaryRoute)