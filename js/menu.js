function validateEmail() {
  var emailInput = document.getElementById('emailInput').value;
  //defines a regular expression (regex) pattern for validating an email address. example: "raybendalemagallon@gmail.com
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    // Email is valid, show the hidden element
    document.getElementById('successMessage').style.display = 'flex';
    document.getElementById('sign-upForm').style.display = 'none';
  } else {
      document.getElementById('errorMessage').style.display = 'block';
  }
}
function dismissMessage() {
document.getElementById('successMessage').style.display = 'none';
document.getElementById('sign-upForm').style.display = 'none';
  document.getElementById('menu').style.filter = 'blur(0px)';
}