document.addEventListener("DOMContentLoaded", () => {

const fullName = document.querySelector('input[placeholder="Full Name"]');
const email = document.querySelector('input[placeholder="Email Address"]');
const password = document.querySelector('input[placeholder="Password"]');
const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]');
const signupBtn = document.querySelector(".signup-btn");

signupBtn.addEventListener("click", function(e){

e.preventDefault();

const name = fullName.value.trim();
const mail = email.value.trim();
const pass = password.value.trim();
const confirm = confirmPassword.value.trim();

if(name === ""){
alert("Please enter your Full Name");
fullName.focus();
return;
}

if(mail === ""){
alert("Please enter your Email Address");
email.focus();
return;
}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(mail)){
alert("Please enter a valid Email Address");
email.focus();
return;
}

if(pass.length < 6){
alert("Password must be at least 6 characters");
password.focus();
return;
}

if(pass !== confirm){
alert("Passwords do not match");
confirmPassword.focus();
return;
}

signupBtn.disabled=true;
signupBtn.innerHTML="Creating Account...";

signupBtn.style.transform="scale(0.98)";
signupBtn.style.opacity="0.8";

setTimeout(()=>{

signupBtn.innerHTML="Account Created ✓";

signupBtn.style.background="#1B5E20";

setTimeout(()=>{

window.location.href="login.html";

},1200);

},1500);

});

});
