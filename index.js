const mysql = require('mysql');
require('dotenv').config();
const inquirer = require('inquirer');
const console = require('console');



// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASS,
  database: 'employeeTracker_db',
});

// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;

  console.log('connected');
  start();
});

const start = () => {
  inquirer
    .prompt([
      {
        name: 'initialPrompt',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add department', 'Add role', 'Add Employee', 'View departments', 'View roles', 'View employees', 'Update employee roles']
      }
    ]).then((answer) => {
      switch (answer.initialPrompt) {
        case 'Add department':
          addDepartment()
          break;
        case 'Add role':
          addRole()
          break;
        case 'Add employee':
          addEmployee()
          break;
        case 'View departments':
          viewDepartments()
          break;
        case 'View roles':
          viewroles()
          break;
        case 'View employees':
          viewEmployees()
          break;
        case 'Update employee roles':
          updateRoles()
          break;
        default: console.log('Done')
      }

    });
}

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'departmentName',
        type: 'input',
        message: 'What department would you like to add?'
      }
    ]).then((answer) => {
      console.log(answer.departmentName)
          start()

      // const query = connection.query(
      //   'UPDATE department SET ? WHERE ?',
      //   [
      //     {
      //       name: answer.departmentName
      //     }
      //   ],
      //   (err) => {
      //     if (err) throw err;
          
      //   }
      // )
    })
}

const addRole = () => {
  inquirer
    .prompt([
      {
        name: 'role',
        type: 'input',
        message: 'What role would you like to add?'
      }
    ]).then((answer) => {
      console.log(answer.role)
          start()
    })
}

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'employee',
        type: 'input',
        message: 'What employee would you like to add?'
      }
    ]).then((answer) => {
      console.log(answer.role)
          start()
    })
}
