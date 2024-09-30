import { fetchData } from "./js/pixabay-api";

const API_KEY = '46251746-b7ef5ea5c8ec4690d00bddcb0';

const form = document.querySelector('form');
const input = document.querySelector("#search-input");
const gallery = document.querySelector('.gallery');

let searchString = '';

input.addEventListener('input', (e) => {
    searchString = e.target.value;
});

form.addEventListener('submit', e => {
    e.preventDefault();
    gallery.innerHTML = '';
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: searchString,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    fetchData(searchParams);

    form.elements.search.value = '';    
});
