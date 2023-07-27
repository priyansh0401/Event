var loginForm = document.querySelector('.form-wrapper.sign-in form');
var signupForm = document.querySelector('.form-wrapper.sign-up form');
var wrapper = document.querySelector('.wrapper');
var signUpLink = document.querySelector('.signUp-link');
var signInLink = document.querySelector('.signIn-link');

var users = {}; // Object to store user information

// Switch to the sign-up form
signUpLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signIn');
  wrapper.classList.remove('animate-signUp');
});

// Switch to the login form
signInLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signUp');
  wrapper.classList.remove('animate-signIn');
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var loginEmailInput = document.querySelector('.form-wrapper.sign-in input[type="text"]');
  var loginPasswordInput = document.querySelector('.form-wrapper.sign-in input[type="password"]');
  var loginEmail = loginEmailInput.value;
  var loginPassword = loginPasswordInput.value;

  // Check if user exists in the users object
  if (users.hasOwnProperty(loginEmail)) {
    var user = users[loginEmail];
    if (user.password === loginPassword) {
      alert('Login Successful!');
      loginForm.reset();
      window.location.href = 'discord_clone2.html';
      return; // Exit the function after successful login
    } else {
      alert('Invalid username or password');
    }
  } else {
    alert('User does not exist');
  }
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var signupEmailInput = document.querySelector('.form-wrapper.sign-up input[type="email"]');
  var signupPasswordInput = document.querySelector('.form-wrapper.sign-up input[type="password"]');
  var signupEmail = signupEmailInput.value;
  var signupPassword = signupPasswordInput.value;

 
  if (users.hasOwnProperty(signupEmail)) {
    alert('User already exists. Please login instead.');
    signupForm.reset();
  } else {

    users[signupEmail] = {
      password: signupPassword
    };

    alert('Sign up successful! Please login.');
    signupForm.reset();
  }
});
