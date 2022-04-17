const inquirer = require('inquirer');

class Employee {
    constructor(name, email, id) 
    {
    
        this.name = name,
        this.email = email,
        this.id = id,
        this.role = 'Employee'
    }
    getName() {
        return {
            name: this.name
        };
    }

    getId() {
        return {
            id: this.id
        };
    }

    getEmail() {
        return {
            email: this.email
        };
    }

    getRole() {
        return this.role
    }
}

module.exports = Employee;
