var registrationForm = document.getElementById('registrationForm');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var confirmPasswordInput = document.getElementById('confirmPasswordInput');
var usernameInput = document.getElementById('usernameInput');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;
  var username = usernameInput.value;

  
  alert('Registration Successful!');
  registrationForm.reset();

  
  window.location.href = 'index.html';
});
