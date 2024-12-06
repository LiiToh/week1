const profileimage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn")

const isWizard = confirm("Are you a wizard?");
//console.log (typeof isWizard);

if(isWizard === true){
console.log("Welcome to Hogwarts!");
}
else{
  profileimage.src = "images/image2.jpg";
  firstNameSpan.innerHTML = "Dudley Dursley";
 ageSpan.innerHTML = 12;
 statusSpan.innerHTML = "Muggle";
}

btnUpdateProfile.addEventListener("click", () => {
    profileimage.src = "images/image3.jpg";
    firstNameSpan.innerHTML = "Lara Croft";
   ageSpan.innerHTML = 25;
   statusSpan.innerHTML = "Tomb Raider";
});