import dotenv from 'dotenv'

dotenv.config()

export const _config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_APP_PASSWORD: process.env.SMTP_APP_PASSWORD
}

