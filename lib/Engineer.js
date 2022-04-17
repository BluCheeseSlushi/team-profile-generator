const inquirer = require('inquirer');
const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, email, id, username) {
        super(name, email, id);

        this.username = username
        this.role = 'Engineer'
        
    }
    getGithub() {
        return this.username
    }
}
module.exports = Engineer;
