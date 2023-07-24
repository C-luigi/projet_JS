async function fetchUsers() {
    const r = await fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10');
    if (r.ok === true) {
        const json = await r.json();
        // for (let i = 0; i < r.json(); i++){
        for (const joke of json.jokes) {
            console.log(joke)
            const art = document.querySelector('article');
            const order = document.createElement('h3');
            const delevry = document.createElement('p');
            order.textContent = joke.setup;
            delevry.textContent = joke.delivery;
            art.appendChild(order);
            art.appendChild(delevry);
        }
        return json.jokes;
    } else {
        throw new Error('Impossible de contacter le serveur')
    }
}
fetchUsers();
// let postBouton = document.getElementById('postBouton');
// postBouton.addEventListener('click', function () {
//     console.log(test);
// } );
document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();
    var donneesFormulaire = new FormData(event.target);
    for(let [name, value] of donneesFormulaire.entries()) {
        console.log(name, value);
        const art = document.querySelector('article');
        const order = document.createElement('h3');
        const delevry = document.createElement('p');
        delevry.textContent = value;
        art.appendChild(delevry);
        art.insertBefore(delevry, art.children[0]);
    }
});