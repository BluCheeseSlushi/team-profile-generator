const inquirer = require('inquirer');
const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, email, id, username = inquirer.prompt(
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s Github username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your engineer\'s Github username');
                    return false;
                }
            }
        })) {
        super(name, email, id);

        this.username = username
        this.role = 'Engineer'
        
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;
