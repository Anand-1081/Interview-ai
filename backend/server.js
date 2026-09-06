require('dotenv').config()

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = require('./src/app')
const connectToDB = require('./src/config/database')

const PORT = process.env.PORT || 3000

connectToDB()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})