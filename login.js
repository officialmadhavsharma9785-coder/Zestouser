document.addEventListener("DOMContentLoaded",()=>{

const loginBtn=document.querySelector(".login-btn");

if(loginBtn){

loginBtn.addEventListener("click",function(e){

e.preventDefault();

this.innerHTML="Please Wait...";

this.style.opacity="0.8";

setTimeout(()=>{

window.location.href="index.html";

},1200);

});

}

});
