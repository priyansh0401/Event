// var loginForm = document.getElementById('loginForm');
// var loginEmailInput = document.getElementById('loginEmailInput');
// var loginPasswordInput = document.getElementById('loginPasswordInput');

// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   var loginEmail = loginEmailInput.value;
//   var loginPassword = loginPasswordInput.value;

 
//   alert('Login Successful!');
//   loginForm.reset();

  
//   window.location.href = 'discord_clone.html';
// });


// var loginForm = document.getElementById('loginForm');
// var loadingOverlay = document.getElementById('loadingOverlay');

// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault();

  
//   loadingOverlay.classList.add('loading');

//   setTimeout(function() {
//     var loginEmail = loginEmailInput.value;
//     var loginPassword = loginPasswordInput.value;

//     alert('Login Successful!');
//     loginForm.reset();

   
//     loadingOverlay.classList.remove('loading');

//     window.location.href = 'discord_clone.html';
//   }, 2000); // Adjust the delay time as needed
// });


















const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
}


var loginForm = document.getElementById('loginForm');
var loginEmailInput = document.getElementById('loginEmailInput');
var loginPasswordInput = document.getElementById('loginPasswordInput');
 loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var loginEmail = loginEmailInput.value;
  var loginPassword = loginPasswordInput.value;

 
  alert('Login Successful!');
  loginForm.reset();

  
  window.location.href = 'discord_clone.html';
}                          
                           
                           
                           
                           
);







