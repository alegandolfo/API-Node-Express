import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api-node',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10
})

export default pool