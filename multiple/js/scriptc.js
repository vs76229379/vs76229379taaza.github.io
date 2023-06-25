function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === '' || password === '') {
    alert('Please enter both email and password.');
    return;
  }

  // Perform login validation here
  // For the sake of simplicity, let's assume a successful login
  alert('Login successful!');
  // Redirect to the customer dashboard or another page
  // window.location.href = 'customer_dashboard.html';
}
