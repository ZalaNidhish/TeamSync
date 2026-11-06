import express from 'express';
export const app = express();
import authRouter from './routes/auth.routes.js'
import adminRouter from './routes/admin.routes.js'
import departmentRouter from './routes/department.routes.js'
import cors from 'cors'
import passport from './config/passport.js'

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json())
app.use(passport.initialize())


app.get('/', (req, res)=>{
    res.send("Team Sync Backend Running")
})

app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/departments', departmentRouter)