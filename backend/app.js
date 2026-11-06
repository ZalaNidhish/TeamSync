import express from 'express';
export const app = express();
import authRouter from './routes/auth.routes.js'
import cors from 'cors'

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Team Sync Backend Running")
})

app.use('/api/auth', authRouter)