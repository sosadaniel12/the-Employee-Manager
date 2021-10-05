//Makes cards for the employees

const Manager = require("../lib/manager");

//generate a card for the manager card
const generateManagerCard = () => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Manager </div>
  <div class="card-body">
    <h5 class="card-title">${Manager.name}</h5>
    <h3>Manager</h3><i class="bi bi-clipboard-check"></i>
    <p class="id">${Manager.id}</p>
    <p class="email">${Manager.email}</p>
    <p class="officeNumber">${Manager.officeNumber}</p>
  </div>
</div>
    `;
};
//generate a card for the Engineer card
//generate a card for the Intern card
//make the whole html page template
const generateHtml = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Maanger</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <!--Team Cards-->
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
</html>`;
};
