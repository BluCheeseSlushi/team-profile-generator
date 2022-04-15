function Intern() {
    return inquirer.prompt([
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
    }]);
};