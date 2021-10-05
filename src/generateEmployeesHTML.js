//Makes cards for the employees

//generate a card for the manager card
const generateManagerCard = (manager) => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header"> </div>
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h3>Manager</h3><i class="bi bi-clipboard-check"></i>
    <p class="id">${manager.id}</p>
    <p class="email">${manager.email}</p>
    <p class="officeNumber">${manager.officeNumber}</p>
  </div>
</div>
    `;
};
//generate a card for the Engineer card
const generateEngineerCard = (engineer) => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header"> </div>
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h3>Engineer</h3><i class="bi bi-tools"></i>
      <p class="id">${engineer.id}</p>
      <p class="email">${engineer.email}</p>
      <p class="gitHub">${engineer.gitHub}</p>
    </div>
  </div>
    `;
};
//generate a card for the Intern card
const generateInternCard = (intern) => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header"> </div>
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h3>Intern</h3><i class="bi bi-pencil"></i>
      <p class="id">${intern.id}</p>
      <p class="email">${intern.email}</p>
      <p class="school">${intern.school}</p>
    </div>
  </div>
    `;
};

const generateHTML = (data) => {
  // array for cards
  teamArray = [];

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

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

//make the whole html page template
const generatePage = () => {
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
