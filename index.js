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
       //table doesn't appear
       const addAnEmployee = () => {
        // assume you use inquirer to get the following
        //  (id, first_name, last_name, role_id, manager_id)
      
        return inquirer.prompt([
        {
            type: "number",
            message: "What is the id of the new employee? ",
            name: "id"
            },

          {
            type: "input",
            message: "What is the first name of the new employee? ",
            name: "first_name"
          },
          {
            type: "input",
            message: "What is the last name of the new employee?",
            name: "last_name"
          },
          {
            type: "number",
            message: "What is the role of the new employee? ",
            name: "role_id"
          },
          {
            type: "number",
            message: "Who is the manager of the new employee? ",
            name: "manager_id"
          },

        ])
        .then(param => {
            db.query(
                // assume you use inquirer to get the following
                `INSERT INTO employee SET?`,[
                    param
                ],
                function (err, result) {
                if(err) console.error(err);
                let formattedResult = result.map( obj => Object.values(obj));
                // add column names
                formattedResult.unshift(["id","first_name", "last_name", "role_id", "manager_id"]);
                console.log(formattedResult);
                //   console.log(table(formattedResult));
                mainMenu();
                }
            )})
    
    };

    //table appears
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
        };
        
        const addARole = () => {
            // assume you use inquirer to get the following
            // (id, title, salary, department_id)
          
            return inquirer.prompt([
                {
                    type: "number",
                    message: "What is the id of the new role? ",
                    name: "id"
                    },
        
                {
                type: "input",
                message: "What is the name of the role? ",
                name: "title"
              },
              {
                type: "input",
                message: "What is the salary of the role?",
                name: "salary"
              },
              {
                type: "number",
                message: "What is the department of the role? ",
                name: "department_id"
              },
            ])
            
            .then( param => {
              
              db.query(
              `INSERT INTO role SET ?`, 
              [
             
                param
              ],
             
              function (err, result) {
                if (err) {
                  console.log(err);
                }
                // console.log(result);
                mainMenu();
              });
            });
            
          };     


        //table appears
        const viewAllDepartments = () => {
            // (id,name)
            return db.query(
                // read from departments
                `SELECT * FROM department`,
                (err, result) => {
                  if(err) console.error(err);
                  let formattedResult = result.map( obj => Object.values(obj));
                  // add column names
                  formattedResult.unshift(["id","name"]);
                  console.log(formattedResult);
                //   console.log(table(formattedResult));
                  mainMenu();
                }
              )
            };

           
            const addADepartment = () => {
                // assume you use inquirer to get the following
                //  (id,name)
              
                return inquirer.prompt([
                    {      
                        type: "number",
                        message: "What is the id of the new department? ",
                        name: "id"
                    },

                  {
                    type: "input",
                    message: "What is the name of the department? ",
                    name: "name"
                  },
                  {
                    type: "input",
                    message: "What is the name of the role? ",
                    name: "title"
                  },
                  {
                    type: "input",
                    message: "What is the salary of the role? ",
                    name: "salary"
                  },
                  {
                    type: "list",
                    message: "Which department does the role belong to? ",
                    choices: ["Sales", "Engineering", "Finance", "Legal", "Customer Service"]
                  },
                ])
                
                .then( param => {
                  
                  db.query(
                  `INSERT INTO department SET ?`, `INSERT INTO role SET ?`,
                  [
                 
                    param
                  ],
                 
                  function (err, result) {
                    if (err) {
                      console.log(err);
                    }
                    // console.log(result);
                    mainMenu();
                  });
                });
                
              };

                


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