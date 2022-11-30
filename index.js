const db = require('./db/connection.js');
const inquirer = require("inquirer");


const viewAllEmployees = () => {
    // (id, first_name, last_name, role_id, manager_id)
    return db.query(
        // read from employee
        `SELECT * FROM employee`,
        (err, result) => {
          if(err) console.error(err);
          let formattedResult = result.map( obj => Object.values(obj));
          // add column names
          formattedResult.unshift(["id","first_name", "last_name", "role_id", "manager_id"]);
          console.log(formattedResult);
        //   console.log(table(formattedResult));
          mainMenu();
        }
      )
    };

    const viewAllRoles = () => {
        // (id, title, salary, department_id)
        return db.query(
            // read from role
            `SELECT * FROM role`,
            (err, result) => {
              if(err) console.error(err);
              let formattedResult = result.map( obj => Object.values(obj));
              // add column names
              formattedResult.unshift(["id","title", "salary", "department_id"]);
              console.log(formattedResult);
            //   console.log(table(formattedResult));
              mainMenu();
            }
          )
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

//Update employee
    //-Will need to do an inquirer 
// const updateAnEmployee = () => {
    
// }


function quit(){
    process.exit()
}

mainMenu();