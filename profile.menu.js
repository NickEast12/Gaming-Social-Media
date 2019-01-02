const profileBtn = document.getElementById('open-profile');
const closeProfile = document.getElementById('profile-close');
const profile = document.getElementById('profile-menu');
const testT = document.getElementById('homepage-test');
const testM = document.getElementById('homepage-body');

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

testT.addEventListener('click', () => {
    profile.style.transform = "translateX(-100%)";
})
