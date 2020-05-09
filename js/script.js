const searchList = document.querySelector('.search-list');
const searchInput = document.querySelector('#search-input');

searchList.addEventListener('click', ()=> {
    if(!searchInput.contains(event.target)){
        searchList.classList.toggle('active-btn');
    }
})