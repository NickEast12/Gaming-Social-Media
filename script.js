const regClose = document.getElementById('regClose');
const regBody = document.getElementById('registrationWrapper');
const regOpen = document.getElementById('register-button');

regOpen.addEventListener('click', () => {
    regBody.style.transform = "translateY(0%)";
})
regClose.addEventListener('click', () => {
    regBody.style.transform = "translateY(-100%)";
})


let regFirstName;
let lastName;
let regLastName;
let email;
let username;
let passworD;

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
  

  

  
