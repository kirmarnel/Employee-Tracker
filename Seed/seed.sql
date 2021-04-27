USE employeeTracker_db;

INSERT INTO department (name)
VALUES ('Management');
INSERT INTO department (name)
VALUES ('Front Desk');
INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Accounting');
INSERT INTO role (title, salary, department_id)
VALUES ('Regional Manager', 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Receptionist', 30000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 45000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 50000, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Micheal', 'Scott', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Pam', 'Beesley', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jim', 'Halpert', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dwight', 'Schrute', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Andy', 'Bernard', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Angela', 'Martin', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Oscar', 'Guitierrez', 4, 1);