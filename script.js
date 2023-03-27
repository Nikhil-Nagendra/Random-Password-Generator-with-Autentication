// Function to generate a random password
function generatePassword() {
    let length = 8;
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz"+"0123456789"+"!@#$%^&*()_+-=,./<>?;:'\"[]{}\\|";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }
  
  // Function to save new credentials to localStorage
  function saveCredentials() {
    let username = document.querySelector('input[name="new-username"]').value;
    let password = generatePassword();
    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
    credentials.push({ username: username, password: password });
    localStorage.setItem("credentials", JSON.stringify(credentials));
    alert(
      `New user ${username} created successfully with password ${password}.`
    );
  }
  
  // Function to authenticate the user
  function authenticateUser() {
    let username = document.querySelector('input[name="username"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
    let found = false;
    for (let i = 0; i < credentials.length; i++) {
      if (credentials[i].username === username && credentials[i].password === password) {
        found = true;
        break;
      }
    }
    if (found) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password!");
    }
  }
  
