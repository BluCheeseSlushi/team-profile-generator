const inquirer = require('inquirer');
const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, email, id, school = inquirer.prompt(
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
        })) {
        super(name, email, id);

        this.school = school
        this.role = 'Intern'
        
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern;
