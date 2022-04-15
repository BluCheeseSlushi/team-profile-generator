const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, email, id, office = inquirer.prompt(
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
        })) {
        super(name, email, id);

        this.office = office
        this.role = 'Manager'
        
    }
}
module.exports = Manager;
