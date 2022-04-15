function engineer() {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your manager\'s name');
                return false;
            }
        }
    }]);
}