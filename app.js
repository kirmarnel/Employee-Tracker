const mysql = require('mysql');

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root',
    password: 'Ekvl!0913',
    database: 'employeeTracker_db',
  });

  // connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    
  });
