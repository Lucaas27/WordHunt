import express from 'express'
import { checkWord } from '../controllers/dictionary.js'

export const dictionaryRoute = express.Router()

dictionaryRoute.get('/', checkWord)