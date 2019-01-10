// firstly assigning variable to the button on the main page
const regClose = document.getElementById('regClose');
const regBody = document.getElementById('registrationWrapper');
const regOpen = document.getElementById('register-button');
// adding event listeners to the buttons to slide in menus
regOpen.addEventListener('click', () => {
    regBody.style.transform = "translateY(0%)";
})
regClose.addEventListener('click', () => {
    regBody.style.transform = "translateY(-100%)";
})

// creating global variables for the registration page
let regFirstName;
let lastName;
let regLastName;
let email;
let username;
let passworD;
// event listener for to collect data from inputs and close the registration page
const regSubmit = document.getElementById('reg-submit');
regSubmit.addEventListener('click', () => {
    regFirstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    regLastName = document.getElementById('lastName').value;
    email = document.getElementById('email').value;
    username = document.getElementById('reg-username').value;
    passworD = document.getElementById('reg-password').value; 
    regBody.style.transform = "translateY(-100%)";
})

// same again for the sign in menu - thing to note here is the username and password 
// variables have been pass to the sign in page by using a if statment 
const signInTrigger = document.getElementById('sign-in-opener');
const signInClose = document.getElementById('sign-in-close');
const overlay = document.getElementById('overlay');
const signInBtn = document.getElementById('sign-in-btn');
const incPassword = document.getElementById('incPassword');

signInTrigger.addEventListener('click', () => {
    overlay.style.top = '0';
})
signInClose.addEventListener('click', () => {
   overlay.style.top = '100%';
})
signInBtn.addEventListener('click' , () => {
        const userName = document.getElementById('username').value;
        const passWord = document.getElementById('password').value;
        if (userName == username && passWord == passworD) {
            console.log(userName + passWord);
            window.location.href = "main-page.html";
        }else {
            incPassword.innerHTML = 'Incorrect Username or Password'
        }
    })
  

  

  
