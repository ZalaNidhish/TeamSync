import dotenv from 'dotenv'

dotenv.config()

export const _config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URI: process.env.GOOGLE_CALLBACK_URI,
    // SMTP_EMAIL: process.env.SMTP_EMAIL,
    // SMTP_APP_PASSWORD: process.env.SMTP_APP_PASSWORD,
    // RESEND_API_KEY: process.env.RESEND_API_KEY
}

