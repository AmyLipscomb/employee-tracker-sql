-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;

-- Creates the employee_db database --
CREATE DATABASE employee_db;

-- Use employee_db database --
USE employee_db;


-- Creates 3 tables: Department, Role, and Employee ---

    -- Table for department includes: id, and name --
    CREATE TABLE department(
        
        id INT auto_increment NOT NULL, -- creates an ID automatically --

        -- makes a string column called "name" which cannot contain null ---
        name VARCHAR(100) NOT NULL,

        PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly -- 
    );

    -- Table for role includes: id, title, salary department_id -- 

    CREATE TABLE role (
        id INT auto_increment NOT NULL, -- creates an ID automatically --
        `title` VARCHAR(30) NOT NULL,

        salary DECIMAL (9,2), -- The precision represents the number of significant digits that are stored for values, and the scale represents the number of digits that can be stored following the decimal point. In this the '9' is the precision, and the '2' is the scale. https://dev.mysql.com/doc/refman/8.0/en/fixed-point-types.html --

        department_id INT NOT NULL, -- this will match the id from the department table --    

        PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly -- 
    );

    -- Table for employee includes: id, first_name, last_name, role_id, manager_id -- 

    CREATE TABLE employee(
         id INT auto_increment NOT NULL, -- creates an ID automatically --

         first_name VARCHAR(100) NOT NULL,

         last_name VARCHAR(100) NOT NULL, 

         role_id INT NOT NULL, -- this will match the id from the role table --   

         manager_id INT NOT NULL,

         PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly -- 
    );