const signInTrigger = document.getElementById('sign-in-opener');
const signInClose = document.getElementById('sign-in-close');
const overlay = document.getElementById('overlay');
const signInBtn = document.getElementById('sign-in-btn');
const incPassword = document.getElementById('incPassword');




signInTrigger.addEventListener('click', () => {
   // overlay.style.transform = "translateY(0)";
   overlay.style.top = '0';

})
signInClose.addEventListener('click', () => {
   // overlay.style.transform = "translateY(100%)"; 
   overlay.style.top = '100%';

})



    signInBtn.addEventListener('click' , () => {
        const userName = document.getElementById('username').value;
        const passWord = document.getElementById('password').value;
        if (userName == 'username' && passWord == 'password') {
            console.log(userName + passWord);
            window.location.href = "main-page.html";
        }else {
            incPassword.innerHTML = 'Incorrect Username or Password'
        }
        
        
    })
  

  

  
