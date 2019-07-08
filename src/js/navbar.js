
import {renderDOMShows} from './shows';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('.input.search');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(searchInput.value !== '') {
        // traer shows!!!
        renderDOMShows(searchInput.value);
    }
});