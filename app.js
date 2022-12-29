const objPeople = [
  {
    username: "Prelater",
    password: "zvri073#",
  },
  {
    username: "Duniel",
    password: "blem123",
  },
];

function getInfo() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  for (var i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      console.log(username + "logged in.");
      localStorage.setItem("username", username);
      window.location.href = "/chat.html";
    }
  }
  console.log("Access denied.");
}
