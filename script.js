document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  // Log the data to the console
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);

  // Display success message
  document.getElementById('successMessage').style.display = 'block';

  // Optionally, you can clear the form
  document.getElementById('contactForm').reset();
});
