require('dotenv').config()

const config = {
    appPort: process.env.APP_PORT,
    host: process.env.DB_HOST,
    ReadingHost: process.env.DB_READING_HOST || process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mysql',
}

module.exports = config