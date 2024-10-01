import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchData } from "./js/pixabay-api";

const API_KEY = '46251746-b7ef5ea5c8ec4690d00bddcb0';

const form = document.querySelector('form');
const input = document.querySelector("#search-input");
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
    e.preventDefault();
    gallery.innerHTML = '';
    if(!input.value) {
        iziToast.error({
            position: 'topRight',
            message: 'Please enter your search query'
        });
        return;
    }
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: input.value.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    fetchData(searchParams);

    form.elements.search.value = '';
    new SimpleLightbox('.gallery a').refresh();    
});
