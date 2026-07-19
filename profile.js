document.addEventListener("DOMContentLoaded",()=>{

const editBtn=document.querySelector(".edit-btn");
const logoutBtn=document.querySelector(".logout");

if(editBtn){

editBtn.addEventListener("click",()=>{

editBtn.innerHTML='<i class="fa-solid fa-check"></i> Saved';

editBtn.style.background="#2E7D32";
editBtn.style.color="#fff";

setTimeout(()=>{

editBtn.innerHTML='<i class="fa-solid fa-pen"></i> Edit Profile';

editBtn.style.background="#fff";
editBtn.style.color="#2E7D32";

},2000);

});

}

if(logoutBtn){

logoutBtn.addEventListener("click",(e)=>{

e.preventDefault();

if(confirm("Are you sure you want to logout?")){

window.location.href="login.html";

}

});

}

});
