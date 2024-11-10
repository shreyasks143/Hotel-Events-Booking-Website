let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnIneraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnIneraction: false,
    },
    breakpoints: {
        450:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});
function validateName(){
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("nameMessage");
    if(name.length>=3){
        nameInput.style.borderColor = "green"
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "green";
        return true;
    }
    else{
        nameInput.style.borderColor = "red";
        nameMessage.textContent = "Name Should be at least of 3 character";
        nameMessage.style.color = "red";
        return false;
    }
}

function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(emailPattern.test(email)){
        emailInput.style.borderColor = "green"
        emailMessage.textContent = "Valid email";
        emailMessage.style.color = "green";
        return true;
    }
    else{
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Enter a valid email address";
        emailMessage.style.color = "red";
        return false;
    }
}

function validatePassword(){
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password");
    const passwordMessage = document.getElementById("passwordMessage");
    if(password.length>=6){
        passwordInput.style.borderColor = "green"
        passwordMessage.textContent = "Strong password";
        passwordMessage.style.color = "green";
        return true;
    }
    else{
        passwordInput.style.borderColor = "red";
        passwordMessage.textContent = "Password should be at least of 6 character";
        passwordMessage.style.color = "red";
        return false;
    }
}

document.getElementById("myform").addEventListener("submit",function(event){
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidPassvalidatePassword = validatePassword();
    if(!isvalidName || !isvalidEmail || !isvalidPassword){
        event.preventDefault();
   }
});                    
