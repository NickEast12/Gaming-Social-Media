const selectMentions = document.getElementById('notification-select-mentions');
const selectAll = document.getElementById('notification-select-all');
const allContent = document.getElementById('notifications-all');
const mentionedContent = document.getElementById('notifications-mentioned');

selectMentions.addEventListener('click', () => {
    selectMentions.style.borderBottom = 'solid white 1px';
    selectAll.style.borderBottom = 'none';
    mentionedContent.style.display = 'block';
    allContent.style.display = 'none';
})

selectAll.addEventListener('click', () => {
    selectAll.style.borderBottom = 'solid white 1px';
    selectMentions.style.borderBottom = 'none';
    allContent.style.display = 'block';
    mentionedContent.style.display = 'none';

})


