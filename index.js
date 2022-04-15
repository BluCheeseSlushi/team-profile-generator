const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs');
const internal = require('stream');
const teamMembers = [];
global.idNum = 1;


function addTeam(teamMembers) {
    console.log(`
  =================
  Add a Team Member
  =================
  `);
  inquirer.prompt({
      type: 'checkbox',
      name: 'class',
      message: 'What is the role of the team member?',
      choices: ['Engineer', 'Intern']
  })
};

Manager()
    .then(addTeam(teamMembers))