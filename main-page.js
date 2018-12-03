const profileBtn = document.getElementById('open-profile');
const closeProfile = document.getElementById('profile-close');
const profile = document.getElementById('profile-menu');
const testT = document.getElementById('homepage-test');
const testM = document.getElementById('homepage-body');
const colorMeRed = document.querySelector('.heart');
const colorMeRed1 = document.getElementById('heart1');
const colorMeRed2 = document.getElementById('heart2');
const colorMeRed3 = document.getElementById('heart3');

console.log(colorMeRed);



profileBtn.addEventListener('click', () => {
    profile.style.transform = "translateX(0)";
    testT.style.display = 'block';
    testM.style.position = 'fixed';
})
closeProfile.addEventListener('click', () => {
    profile.style.transform = "translateX(-100%)";
    testT.style.display = 'none';
    testM.style.position = 'inherit';
})



colorMeRed.addEventListener('click', () => {
    if (colorMeRed.style.color === 'white') {
        colorMeRed.style.color = 'red';
    }else {
        colorMeRed.style.color = 'white';
    }
})
colorMeRed1.addEventListener('click', () => {
    if (colorMeRed1.style.color === 'white') {
        colorMeRed1.style.color = 'red';
    }else {
        colorMeRed1.style.color = 'white';
    }
})
colorMeRed2.addEventListener('click', () => {
    if (colorMeRed2.style.color === 'white') {
        colorMeRed2.style.color = 'red';
    }else {
        colorMeRed2.style.color = 'white';
    }
})
colorMeRed3.addEventListener('click', () => {
    if (colorMeRed3.style.color === 'white') {
        colorMeRed3.style.color = 'red';
    }else {
        colorMeRed3.style.color = 'white';
    }
})



