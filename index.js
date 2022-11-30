const db = require('./db/connection.js');
const inquirer = require("inquirer");


const viewAllEmployees = () => {
    // (id, first_name, last_name, role_id, manager_id)

   return db.query(
        `CREATE VIEW employee SET ?`,
        {
            id: "1,2,3,4,5,6,7,8",
            first_name: "John, Mike, Ashley, Kevin, Kunal, Malia, Sarah, Tom",
            last_name: "Doe, Chan, Garcia, Tupik, Singh, Brown, Lourde, Holland",
            role_id: "1,2,3,4",
            manager_id: "1,2,3,4,NULL"
        },
        (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });

   
    return mainMenu();
}

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

//continue to create the functions for all of the ones made in the .then

// function viewAllEmployees(){
//     //enter a join
// }

// function  viewAllRoles()

// function viewAllDepartments()

// function  addADepartment()

// function  addARole()

// function  addAnEmployee()

// function  updateAnEmployee()

function quit(){
    process.exit()
}

mainMenu();