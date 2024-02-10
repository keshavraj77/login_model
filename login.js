document.addEventListener("DOMContentLoaded", function() {
    // Hide the login container initially
    document.querySelector('.login-container').classList.add('hidden');
  
    // Show the loading spinner for 3 seconds
    setTimeout(function() {
      document.querySelector('.loading').classList.add('hidden');
      document.querySelector('.login-container').classList.remove('hidden');
    }, 3000);
  
    // Handle the "Forgot Password?" link click event
    document.querySelector('.forgot-password').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (i.e., navigating to the href)
      document.getElementById('reset-password-modal').style.display = 'block'; // Show the reset password modal
    });
  
    // Handle the close button click event for the reset password modal
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('reset-password-modal').style.display = 'none'; // Hide the reset password modal
    });
  
    // Show registration form when "Register" link is clicked
    document.getElementById('register-link').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('register-form-container').classList.remove('hidden');
      document.querySelector('.register-link').classList.add('hidden');
    });
  
    // Handle the login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Example: Check login credentials (replace this with your own logic)
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Assuming login is successful if username and password are not empty
      if (username && password) {
        // Redirect to another HTML page (replace 'dashboard.html' with the actual filename)
        window.location.href = 'index2.html';
      } else {
        // Display an error message or handle failed login
        alert('Invalid username or password. Please try again.');
      }
    });
  
    // Handle the registration form submission
    document.getElementById('register-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Gather form data
      const formData = new FormData(this);
      const registerData = {};
      formData.forEach(function(value, key) {
        registerData[key] = value;
      });
  
      // Example: Log the registration data to the console (replace this with your own logic)
      console.log('Registration Data:', registerData);
    });
  });
  