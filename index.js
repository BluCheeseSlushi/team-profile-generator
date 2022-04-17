// Calling the resoures with require
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/pageTemplate')
// Setting variables
global.idNum = 1;
const teamMembers = [];

// This function builds a manager to start the app
function teamBuilder() {
    return inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is the manager\'s name?',
      validate: nameInput => {
          if (nameInput) {
              
              return true;
          } else {
              console.log('Please enter your employee\'s name');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is their Email address?',
      validate: nameInput => {
          if (nameInput) {
              
              return true;
          } else {
              console.log('Please enter your manager\'s Email');
              return false;
          }
      }
  },
  
    {
        type: 'input',
        name: 'office',
        message: 'What is their office number?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your manager\'s office number');
                return false;
            }
        }  
    }])
    .then(answers => {
        // Builds a manager using the answers and a global variable as the id
      let manager = new Manager(answers.name, answers.email, global.idNum, answers.office)
      teamMembers.push(manager);
      global.idNum = global.idNum + 1
      return manager;
    })
};

// This function adds team members to an array and calls itself to cylce through multiple times
function confirmAdd() {
  inquirer.prompt([{
    type: 'checkbox',
    name: 'confirmAdd',
    message: 'Would you like to add a team member?',
    choices: ['Engineer', 'Intern', 'no']
  }])
  .then(answers => {
    if (answers.confirmAdd == 'Engineer') {
      console.log('Engineer');
        inquirer.prompt([{
          type: 'input',
          name: 'name',
          message: 'What is the employee\'s name?',
          validate: nameInput => {
              if (nameInput) {
                  global.name = nameInput;
                  return true;
              } else {
                  console.log('Please enter your employee\'s name');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their Email address?',
        validate: nameInput => {
            if (nameInput) {
                global.email = nameInput;
                return true;
            } else {
                console.log('Please enter your employee\'s Email');
                return false;
            }
        }
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is the engineer\'s Github username?',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your engineer\'s Github username');
              return false;
          }
      }
    }])
    .then(answers => {
      let newTeamMember = new Engineer(answers.name, answers.email, id = global.idNum, answers.username)
      global.idNum = global.idNum + 1
      teamMembers.push(newTeamMember);
      confirmAdd();
    });
    } else if (answers.confirmAdd == 'Intern') {
      console.log('Intern');
        inquirer.prompt([{
          type: 'input',
          name: 'name',
          message: 'What is the employee\'s name?',
          validate: nameInput => {
              if (nameInput) {
                  global.name = nameInput;
                  return true;
              } else {
                  console.log('Please enter your employee\'s name');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their Email address?',
        validate: nameInput => {
            if (nameInput) {
                global.email = nameInput;
                return true;
            } else {
                console.log('Please enter your employee\'s Email');
                return false;
            }
        }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do they attend?',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your intern\'s school');
              return false;
          }
      }  
    }])
    .then(answers => {
      let newTeamMember = new Intern(answers.name, answers.email, id = global.idNum, answers.school)
      global.idNum = global.idNum + 1
      teamMembers.push(newTeamMember);
      confirmAdd();
    });
    } else {
        // Sends the team data to page template
      generatePage(teamMembers);
    }
  })
}
// Calls the first function and then asks to added team members
teamBuilder()
  .then(confirmAdd)
