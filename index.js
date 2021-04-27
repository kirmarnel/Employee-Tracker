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
        choices: ['Add department', 'Add role', 'Add employee', 'View departments', 'View roles', 'View employees', 'Update employee roles', 'Exit']
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
          viewRoles()
          break;
        case 'View employees':
          viewEmployees()
          break;
        case 'Update employee roles':
          updateRoles()
          break;
        default: connection.end()
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'departmentName',
        type: 'input',
        message: 'What department would you like to add?'
      }
    ]).then((answer) => {
      const query = connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.departmentName
        },
        (err) => {
          if (err) throw err;
        console.log('Department Added')
        }
      );
          start();
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: 'role',
        type: 'input',
        message: 'What role would you like to add?'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary for this role?'
      },
      {
        name: 'deptId',
        type: 'input',
        message: 'What is the department ID for this role?'
      }
    ]).then((answer) => {
      const query = connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.role,
          salary: answer.salary,
          department_id: answer.deptId
        },
        (err) => {
          if (err) throw err;
        console.log('Role Added')
        }
      );
          start();
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'What is the employee\'s first name?'
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'What is the employee\'s last name?'
      },
      {
        name: 'roleId',
        type: 'input',
        message: 'What is the employee\'s role ID?'
      },
      {
        name: 'managerID',
        type: 'input',
        message: 'What is the employee\'s manager ID?'
      }
    ]).then((answer) => {
      const query = connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId
        },
        (err) => {
          if (err) throw err;
        console.log('Employee Added')
        }
      );
          start();
    });
};

const viewDepartments = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
};

const viewRoles = () => {
  connection.query('SELECT * FROM role INNER JOIN department ON (role.department_id = department.id)', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
};

const viewEmployees = () => {
  connection.query('SELECT * FROM employee INNER JOIN role ON (employee.role_id = role.id) ', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
};

const updateRoles = () => {
  inquirer.prompt([
    {
      name: 'empId',
      type: 'input',
      message: 'What is the ID number of the employee you would like to update?'
    },
    {
      name: 'newRoleId',
      type: 'input',
      message: 'What is the employee\'s new role ID?'
    }
  ]).then((answer) => {

    const query = connection.query(
      'UPDATE employee SET ? WHERE ?',
      [
        {
          role_id: answer.newRoleId
        },
        {
          id: answer.empId
        }
      ],
      (err, res) => {
        if (err) throw err;
        console.log('Employee Updated');  
        start();
      }
    );
  });
};