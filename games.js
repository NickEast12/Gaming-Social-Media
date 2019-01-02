
// the select container
    const gameSelect = document.getElementById('games-select');

// the game images 
    const xboxListing = document.getElementsByClassName('xbox-option'); 
    const ps4Listing = document.getElementsByClassName('ps4-option');  
    const steamListing = document.getElementsByClassName('steam-option');  

// gathering the selcted value
    gameSelect.addEventListener('click', () => {
        const gameValue = gameSelect[gameSelect.selectedIndex].value;
     // the if statment
     if (gameValue == 'Xbox') {
            for (let i = 0; gameSelect.length; i++) {
                 xboxListing[i].style.display = 'inherit';
                 ps4Listing[i].style.display = 'none';
                 steamListing[i].style.display = 'none';
            }
        }
    if (gameValue == 'PS4') {
        for (let i = 0; gameSelect.length; i++) {
            ps4Listing[i].style.display = 'inherit';
            xboxListing[i].style.display = 'none';
            steamListing[i].style.display = 'none';
         }
        }
    if (gameValue == 'Steam') {
        for (let i = 0; gameSelect.length; i++) {
            steamListing[i].style.display = 'inherit';
            xboxListing[i].style.display = 'none';
            ps4Listing[i].style.display = 'none';
            } 
        }
    if (gameValue == 'Platform?') {
        for (let i = 0; gameSelect.length; i++) {
            steamListing[i].style.display = 'inherit';
            xboxListing[i].style.display = 'inherit';
            ps4Listing[i].style.display = 'inherit';
            }   
        } 
    })


       





