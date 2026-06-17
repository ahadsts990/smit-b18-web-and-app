function signup(e) {
  e.preventDefault();

  let users = getData("users");

  let newUser = {
    id: Date.now(),
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    followers: [],
    following: []
  };

  users.push(newUser);
  setData("users", users);

  alert("Signup successful");
  window.location.href = "login.html";
}

function login(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let users = getData("users");

  let user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid login");
    return;
  }

  setCurrentUser(user);
  window.location.href = "index.html";
}