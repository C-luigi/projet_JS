document.getElementById('mosaic-view').addEventListener('click', function() {
    let gallery = document.getElementById('gallery');
    gallery.classList.remove('column-view');
    gallery.classList.add('mosaic-view');
});

document.getElementById('column-view').addEventListener('click', function() {
    let gallery = document.getElementById('gallery');
    gallery.classList.remove('mosaic-view');
    gallery.classList.add('column-view');
});