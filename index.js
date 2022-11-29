const db = require('./db/connection.js');
const inquirer = require("inquirer");
// const { listenerCount } = require('./db/connection.js');

function mainMenu (){
    inquirer.prompt([
        {
            type: "list",
            name: "userchoice",
            message: "What would you like to do?",
            choices:["View all employees", "View all roles", "View all departments", "Add a department", "Add a role", "Add an employee", "Update an employee", "Quit"]


        }
    ])
    .then((answers)=>{
        switch(answers.userchoice){
            case "View all employees":
                viewAllEmployees()
                break;
            case "View all roles":
                viewAllRoles()
                break;
            case "View all departments":
                viewAllDepartments()
                break;
            case "Add a department":
                addADepartment()
                break;
            case "Add a role":
                addARole()
                break;
            case "Add an employee":
                addAnEmployee()
                break;
            case "Update an employee":
                updateAnEmployee()
                break;
            default: 
                quit();
        }
    })

}

//continue to create the functions for all of the ones you made 

function viewAllEmployees(){
    
}

function quit(){
    process.exit()
}

mainMenu()