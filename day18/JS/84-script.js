const isEmailValid = (email) => {
  let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
  f;
};

const isPasswordValid = (password) => {
  let passwordRegEx = /[^A-Za-z0-9]/;
  return passwordRegEx.test(password);
};

console.log(isPasswordValid("abcAB98")); //true
console.log(isEmailValid("abc@gmail.com")); // true

btnLogin.onclick = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  try {
    if (!isEmailValid(email)) throw new Error("Email is not valid");
    if (isPasswordValid(password)) throw new Error("Password is not valid");
  } catch (error) {
    alert(error.message);
  }
};
