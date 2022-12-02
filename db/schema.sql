-- Drops the employee__tracker_db if it exists currently --
DROP DATABASE IF EXISTS employee_tracker_db;

-- Creates the employee__tracker_db database --
CREATE DATABASE employee_tracker_db;

-- Use employee__tracker_db database --
USE employee_tracker_db;


-- Creates 3 tables: Department, Role, and Employee ---

    -- Table for department includes: id, and name --
    CREATE TABLE department(
        
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, -- creates an ID automatically --

        -- makes a string column called "name" which cannot contain null ---
        name VARCHAR(30) NOT NULL

    );

    -- Table for role includes: id, title, salary department_id -- 

    CREATE TABLE role (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, -- creates an ID automatically --
        title VARCHAR(30) NOT NULL,

        salary DECIMAL (9,2), -- The precision represents the number of significant digits that are stored for values, and the scale represents the number of digits that can be stored following the decimal point. In this the '9' is the precision, and the '2' is the scale. https://dev.mysql.com/doc/refman/8.0/en/fixed-point-types.html --

        department_id INT NOT NULL, -- this will match the id from the department table --    
        FOREIGN KEY(department_id) -- primary key from another table
        REFERENCES department(id)
        ON DELETE CASCADE
    
    );

    -- Table for employee includes: id, first_name, last_name, role_id, manager_id -- 

    CREATE TABLE employee(
         id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, -- creates an ID automatically, both primary key and auto_increment has to be set for the column id to work correctly  --

         first_name VARCHAR(30) NOT NULL,

         last_name VARCHAR(30) NOT NULL, 

         role_id INT NOT NULL, -- this will match the id from the role table --   

         FOREIGN KEY(role_id)
         REFERENCES role(id)
         ON DELETE CASCADE,

         manager_id INT NULL,

        FOREIGN KEY(manager_id)
        REFERENCES employee(id)
        ON DELETE SET NULL
        
    );

-- To show the tables created --
    SHOW TABLES;


    --    CONSTRAINT fk_department