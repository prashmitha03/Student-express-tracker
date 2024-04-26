const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',      // Change to your database host if different
    user: 'root',           // Change to your database username
    password: '',           // Change to your database password
    database: 'expense'     // Change to your database name
});
// Ensure connection to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to database');
});
module.exports = connection;
