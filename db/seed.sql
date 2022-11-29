-- Use employee__tracker_db database --
USE employee_tracker_db;

-- SEED file inserts data --
INSERT INTO employee 

-- columns should match the values below --
(id, first_name, last_name, role_id, manager_id)
VALUES 
(1, "John", "Doe", 1, NULL),
(2, "Mike", "Chan", 2, 1),
(3, "Ashley", "Garcia", 3, NULL),
(4, "Kevin", "Tupik", 4, 2),
(5, "Kunal", "Singh", 5, NULL),
(6, "Malia", "Brown", 6, 3),
(7, "Sarah", "Lourde", 7, NULL),
(8, "Tom", "Holland", 8, 4);

-- SELECT * FROM employee;

-- Need to insert data into the department and role tables --
INSERT INTO department
(id,name)
VALUES
(1, "Sales"),
(2, "Engineering"),
(3, "Finance"),
(4,"Legal");

-- SELECT * FROM department;


INSERT INTO role
(id, title, salary, department_id)
VALUES
(1, "Sales Lead", 100000, 1),
(2, "Salesperson", 80000, 1),
(3, "Lead Engineer",150000, 2),
(4, "Software Engineer", 125000, 2),
(5, "Account Manager", 160000, 3),
(6, "Accountant", 125000, 3),
(7, "Legal Team Lead", 250000 , 4),
(8, "Lawyer", 190000, 4);

-- SELECT * FROM role;


