let teamMembers = [
    {
      name: 'qgrae',
      email: 'qerga',
      id: 2,
      role: 'Engineer',
      username: 'qgrae'
    },
    {
      name: 'wge5ra',
      email: 'qegra',
      id: 3,
      role: 'Intern',
      school: 'qgraev'
    }
  ]


const generateCards = teamMembers => {
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].role == 'Manager') {
            return `
            <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div class="card-header">${teamMembers[i].role}</div>
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].name}</h5>
                    <p class="card-text">ID: ${teamMembers[i].id}</p>
                    <a href="${teamMembers[i].email}">${teamMembers[i].email}</a>
                    <p>${teamMembers[i].office}</p>
                </div>
            </div>
            `
        } else if (teamMembers[i].role == 'Engineer') {
            return `
            <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div class="card-header">${teamMembers[i].role}</div>
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].name}</h5>
                    <p class="card-text">ID: ${teamMembers[i].id}</p>
                    <a href="${teamMembers[i].email}">${teamMembers[i].email}</a>
                    <a href="${teamMembers[i].username}">${teamMembers[i].username}</a>
                </div>
            </div>
            `
        } else {
            return `
            <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div class="card-header">${teamMembers[i].role}</div>
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].name}</h5>
                    <p class="card-text">ID: ${teamMembers[i].id}</p>
                    <a href="${teamMembers[i].email}">${teamMembers[i].email}</a>
                    <p>${teamMembers[i].school}</p>
                </div>
            </div>
            `
        }
    }
}

const generatePage = teamMembers => {
    console.log( `
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
        
        <div class="container-fluid">
            ${generateCards(teamMembers)}
        </div>
    </body>
    </html>
    `)
}

generatePage(teamMembers);
