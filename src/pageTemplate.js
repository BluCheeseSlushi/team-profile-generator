// Calling the resoures with require
const fs = require('fs');
const { resolve } = require('path');

// Uses file system to create index.html in the dist folder
const createPage = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created'
            });
        });
    });
};

// Uses the teamMembers array to generate the page data
module.exports = teamMembers => {
    let pageData = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container-fluid bg-danger d-flex justify-content-center">
            <header class="text-light m-5 fs-1">My Team</header>
        </div>
        
        <div class="container-fluid p-5">
            <div class="row justify-content-between">
            ${generateCards(teamMembers)}
            </div>
        </div>
    </body>
    </html>
    `
    console.log(pageData)
    // return pageData
    createPage(pageData)
}
// Makes a card for each team member
const generateCards = team => {
    const cards = [];
    for (let i = 0; i < team.length; i++) {
        if (team[i].role == 'Manager') {
            cards.push(`
            <div class="card text-white bg-danger mb-3 p-2" style="max-width: 18rem;">
                <div class="card-header">${team[i].role}</div>
                <div class="card-body">
                    <h5 class="card-title">${team[i].name}</h5>
                    <p class="card-text">ID: ${team[i].id}</p>
                    <a class="card-text" href="mailto:${team[i].email}">${team[i].email}</a>
                    <p class="card-text">Office Number: ${team[i].office}</p>
                </div>
            </div>
            `)
        } else if (team[i].role == 'Engineer') {
            cards.push(`
            <div class="card text-white bg-danger mb-3 p-2" style="max-width: 18rem;">
                <div class="card-header">${team[i].role}</div>
                <div class="card-body">
                    <h5 class="card-title">${team[i].name}</h5>
                    <p class="card-text">ID: ${team[i].id}</p>
                    <a class="card-text" href="mailto:${team[i].email}">${team[i].email}</a>
                    <a class="card-text" target="_blank" href="https://github.com/${team[i].username}">${team[i].username}</a>
                </div>
            </div>
            `)
        } else {
            cards.push(`
            <div class="card text-white bg-danger mb-3 p-2" style="max-width: 18rem;">
                <div class="card-header">${team[i].role}</div>
                <div class="card-body">
                    <h5 class="card-title">${team[i].name}</h5>
                    <p class="card-text">ID: ${team[i].id}</p>
                    <a class="card-text" href="mailto:${team[i].email}">${team[i].email}</a>
                    <p class="card-text" >School: ${team[i].school}</p>
                </div>
            </div>
            `)
        }
    }
    
    return cards
}
