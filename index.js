const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/pageTemplate')
global.idNum = 1;
const teamMembers = [];


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
      let manager = new Manager(answers.name, answers.email, global.idNum, answers.office)
    //   console.log(manager);
    //   console.log(teamMembers);
      teamMembers.push(manager);
      global.idNum = global.idNum + 1
      return manager;
    })
};

function confirmAdd() {
  inquirer.prompt([{
    type: 'checkbox',
    name: 'confirmAdd',
    message: 'Would you like to add a team member?',
    choices: ['Engineer', 'Intern', 'no']
  }])
  .then(answers => {
      console.log('question skiped');
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
      console.log(newTeamMember);
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
      console.log(newTeamMember);
      teamMembers.push(newTeamMember);
      confirmAdd();
    });
    } else {
      console.log(teamMembers)
      generatePage(teamMembers);
    //   return teamMembers
    }
  })
}

teamBuilder()
  .then(confirmAdd)
//   .then(team => {
//     generatePage(team);
//   })
//   .then(pageData => {
//       console.log(pageData)
//   })
