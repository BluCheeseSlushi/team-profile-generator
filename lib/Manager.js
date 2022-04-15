const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee{
    constructor() {
        super(name, email, id);
        this.office = inquirer.prompt(
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
            })
        this.role = 'Manager'
        
    }
    getRole() {
        return 'Manager'
    }
}

const newManager = new Manager;
newManager.getRole();
