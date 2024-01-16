function validateForm(event) {
    event.preventDefault();
    let fullName = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    // let phone = document.getElementById('').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('con-password').value;
  
    // Validation Criteria
    if (fullName.length < 5) {
      alert('Name must be at least 5 characters long');
      return;
    }
  
    if (!email.includes('@')) {
      alert('Enter a valid email address');
      return;
    }
  
    // if (phone.length !== 10 || phone === '123456789') {
    //   alert('Enter a valid 10-digit phone number');
    //   return;
    // }
  
    if (password.length < 8 || password === 'password' || password === fullName) {
      alert('Password must be at least 8 characters and not the same as the name');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // If all validations pass
    alert('Form submitted successfully!');
  }