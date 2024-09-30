import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { render } from "./render-functions";

const loader = document.querySelector('.loader');

const url = 'https://pixabay.com/api/';

export const fetchData = searchParams => {
    loader.style.display = 'inline-block';
    return fetch(`${url}?${searchParams}`)
        .then(response => {            
            if(!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            if(data.total === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                })
            }
            render(data);            
        })
        .catch(error => console.log(error))
        .finally(() => {
            loader.style.display = 'none';
        })
} 