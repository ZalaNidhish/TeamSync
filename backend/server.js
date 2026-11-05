import { app } from "./app.js";
import { _config } from "./config/config.js";
import {connectDB} from './config/db.js'

await connectDB()

app.listen(_config.PORT, ()=>{
    console.log(`Server running on ${_config.PORT}`);
})