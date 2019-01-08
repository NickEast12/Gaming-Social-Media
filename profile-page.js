const postProfile = document.getElementById('posts');
const postFavourites = document.getElementById('favourites');
const postLikes = document.getElementById('likes');

postProfile.style.borderBottom = 'solid white 4px';

const profileContent = document.getElementById('posts-content');
const favouritesContent = document.getElementById('favourites-content');
const likesContent = document.getElementById('likes-content');

postProfile.addEventListener('click', () => {
    postProfile.style.borderBottom = 'solid white 4px';
    postFavourites.style.borderBottom = 'solid white 1px';
    postLikes.style.borderBottom = 'solid white 1px';
    profileContent.style.display = 'block';
    favouritesContent.style.display = 'none';
    likesContent.style.display = 'none';
})

postFavourites.addEventListener('click', () => {
    postFavourites.style.borderBottom = 'solid white 4px';
    postProfile.style.borderBottom = 'solid white 1px';
    postLikes.style.borderBottom = 'solid white 1px';
    profileContent.style.display = 'none';
    favouritesContent.style.display = 'block';
    likesContent.style.display = 'none';
})

postLikes.addEventListener('click', () => {
    postLikes.style.borderBottom = 'solid white 4px';
    postProfile.style.borderBottom = 'solid white 1px';
    postFavourites.style.borderBottom = 'solid white 1px';
    profileContent.style.display = 'none';
    favouritesContent.style.display = 'none';
    likesContent.style.display = 'block';
})