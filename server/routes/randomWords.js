import express from 'express'
import { getRandomWords } from '../controllers/randomWords.js'

export const randomWordsRoute = express.Router()

randomWordsRoute.get('/', getRandomWords)