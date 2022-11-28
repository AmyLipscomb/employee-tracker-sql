-- SEED file inserts data --
INSERT INTO employee 

-- columns should match the values below --
(first_name, last_name, title, department, salary, manager)
VALUES 
("John", "Doe", "Sales Lead", "Sales", "100000"),
("Mike", "Chan", "Salesperson", "Sales", "80000", "John Doe"),
("Ashley", "Garcia", "Lead Engineer", "Engineering", "150000"),
("Kevin", "Tupik", "Software Engineer", "Engineering", "125000", "Ashley Garcia"),
("Kunal", "Singh", "Account Manager", "Finance", "160000"),
("Malia", "Brown", "Accountant", "Finance", "125000", "Kunal Singh"),
("Sarah", "Lourde", "Legal Team Lead", "Legal", "250000"),
("Tom", "Holland", "Lawyer", "Legal", "190000");

SELECT * FROM employee;

-- Need to insert data into the department and role tables --
INSERT INTO department
(`name`)
VALUES
("Sales", "Engineering", "Finance","Legal");

SELECT * FROM department;


INSERT INTO `role`
(title, salary, department_id)
VALUES
("Sales Lead", "Sales", 1),
("Salesperson", "Sales", 2),
("Lead Engineer", "Engineering", 3),
("Software Engineer", "Engineering", 4),
("Account Manager", "Finance", 5),
("Accountant", "Finance", 6),
("Legal Team Lead", "Legal", 7),
("Lawyer", "Legal", 8);

SELECT * FROM `role`;


