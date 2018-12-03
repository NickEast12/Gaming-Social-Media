const profileBtn = document.getElementById('open-profile');
const closeProfile = document.getElementById('profile-close');
const profile = document.getElementById('profile-menu');


profileBtn.addEventListener('click', () => {
    profile.style.transform = "translateX(0)";

})
closeProfile.addEventListener('click', () => {
    profile.style.transform = "translateX(-100%)";

})