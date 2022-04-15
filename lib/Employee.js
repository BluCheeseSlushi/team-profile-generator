const inquirer = require('inquirer');

class Employee {
    constructor(name, email, id) {
    
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

    getrole() {
        return {
            role: this.role
        };
    }
}

let jeff = new Employee(
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?',
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
                console.log('Please enter your employee\'s Email');
                return false;
            }
        }
    }]),
    global.idNum
);

jeff.getName();
