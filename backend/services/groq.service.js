import {ChatGroq} from '@langchain/groq'
import { _config } from '../config/config.js'

const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: _config.API_KEY
})

export const improveBio = async(bio)=>{
    const response = await model.invoke(`Improve this bio for me (300 characters max) : ${bio}`)
    return response.content
}