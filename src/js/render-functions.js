import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');

export const render = (data) => {
    const fragment = new DocumentFragment();
    data.hits.map(element => {
        
        const link = document.createElement('a');
        link.setAttribute('href', element.largeImageURL);
        link.classList.add('gallery-link');
        
        const image = document.createElement('img');
        image.setAttribute('src', element.webformatURL);
        image.setAttribute('alt', element.tags);

        const list = document.createElement('dl');

        const dtLikes = document.createElement('dt');
        dtLikes.innerHTML = 'Likes';

        const ddLikes = document.createElement('dd');
        ddLikes.innerHTML = element.likes;

        const dtViews = document.createElement('dt');
        dtViews.innerHTML = 'Views';

        const ddViews = document.createElement('dd');
        ddViews.innerHTML = element.views;

        const dtComments = document.createElement('dt');
        dtComments.innerHTML = 'Comments';

        const ddComments = document.createElement('dd');
        ddComments.innerHTML = element.comments;

        const dtDownloads = document.createElement('dt');
        dtDownloads.innerHTML = 'Downloads';

        const ddDownloads = document.createElement('dd');
        ddDownloads.innerHTML = element.downloads;

        list.append(dtLikes);
        list.append(ddLikes);
        list.append(dtViews);
        list.append(ddViews);
        list.append(dtComments);
        list.append(ddComments);
        list.append(dtDownloads);
        list.append(ddDownloads);

        link.append(image);
        link.append(list);

        fragment.append(link);        
    })

    gallery.append(fragment);

    new SimpleLightbox('.gallery a');
}