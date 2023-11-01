import dotenv from 'dotenv';
import { app } from './app.js'
import { info } from './helpers/logger.js'
dotenv.config()

app.listen(process.env.PORT, () => info(`Server is running on port ${process.env.PORT}`))
