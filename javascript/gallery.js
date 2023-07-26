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
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('urlForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var url = document.getElementById('urlInput').value;
        if (!(url.startsWith('http://') || url.startsWith('https://'))) {
            alert('L\'URL doit commencer par "http://" ou "https://".');
        } else {
            fetch(url)
                .then(response => {
                    if(response.ok) {
                        let img = document.createElement('img');
                        img.src = url;
                        document.getElementById('gallery').appendChild(img);
                    } else {
                        console.error('Erreur : URL invalide');
                    }
                })
                .catch(error => console.error('Erreur de fetch: ', error));
        }
    });
});