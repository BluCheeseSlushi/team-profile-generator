const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, email, id, office) {
        super(name, email, id);

        this.office = office
        this.role = 'Manager'
        
    }
}
module.exports = Manager;
