import {ChatGroq} from '@langchain/groq'
import { _config } from '../config/config.js'

const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: _config.API_KEY
})

export const improveBio = async(bio)=>{
    const response = await model.invoke(`You are an expert personal bio editor. Your task is to improve the user's bio provided to u while keeping it natural, concise, and authentic.

Follow these rules:

1. If the input contains meaningful personal information, improve its grammar, clarity, and sentence structure without changing its original meaning.
2. Do not invent personal details, skills, professions, hobbies, achievements, or experiences.
3. You may add a little natural wording to make the bio more engaging, but keep it relevant to the provided information.
4. If the input is incomplete, use whatever meaningful information is available.
5. If the input is random, meaningless, or contains no usable information, generate a simple, generic bio suitable for anyone.
6. Never reject input or ask the user to provide a valid bio.
7. Keep the bio simple, human-sounding, and preferably 2–4 sentences long.
8. Return only the final bio, without headings, explanations, or quotation marks.

Always return a usable bio, regardless of the input. (300 characters max). Bio is as follows : ${bio}`)
    return response.content
}