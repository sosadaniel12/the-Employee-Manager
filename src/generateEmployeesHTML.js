//Makes cards for the employees

//generate a card for the manager card
const generateManagerCard = function (manager) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4><i class="bi bi-clipboard-check"></i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${manager.id}</p>
          <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
  </div>
</div>
 
    `;
};
//generate a card for the Engineer card
const generateEngineerCard = function (engineer) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4><i class="bi bi-tools"></i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${engineer.id}</p>
          <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github">Github:${engineer.gitHub}</p>
      </div>
  </div>
</div>
    `;
};
//generate a card for the Intern card
const generateInternCard = function (intern) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${intern.name}</h3>
          <h4>Intern</h4><i class="bi bi-pencil"></i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${intern.id}</p>
          <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="school">School: ${intern.school}</p>
      </div>
</div>
</div>
    

    `;
};
let generateHTML = (data) => {
  // array for cards
  let teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);

      teamArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);

      teamArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateInternCard(employee);

      teamArray.push(internCard);
    }
  }

  const employeeCards = teamArray.join("");

  let generateTeam = generateFile(employeeCards);
  return generateTeam;
};

//make the whole html page template
const generateFile = function (employeeCards) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Manager</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css"
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
</html>`;
};

module.exports = generateHTML;
