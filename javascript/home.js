async function fetchUsers() {
    const r = await fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10');
    if (r.ok === true) {
        const json = await r.json();
        for (const joke of json.jokes) {
            console.log(joke)
            const art = document.querySelector('article');
            const ul = document.createElement('ul');
            const order = document.createElement('li');
            const delevry = document.createElement('li');
            order.textContent = joke.setup;
            delevry.textContent = joke.delivery;
            ul.appendChild(order);
            ul.appendChild(delevry);
            art.appendChild(ul);
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
    let dataFormulaire = new FormData(event.target);
    const art = document.querySelector('article');
    const ul = document.createElement('ul');
    ul.className = 'deletClass';
    for(let [name, value] of dataFormulaire.entries()) {
        console.log(name, value);
        const delevry = document.createElement('li');
        delevry.textContent = value;
        ul.appendChild(delevry);
    }
    art.appendChild(ul);
    document.getElementById("formulaire").reset();
});
function deleteElements(classe) {
    var elements = document.getElementsByClassName(classe);
    if(elements.length > 0) {
        elements[elements.length - 1].parentNode.removeChild(elements[elements.length - 1]);
    }
}

document.getElementById("deleteButton").addEventListener("click", function() {
    deleteElements('deletClass');
});