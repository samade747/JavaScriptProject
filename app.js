
let nextbox = document.querySelector('nextbox'); 
nextbox.style.display = 'none';

function Next() {
    let nextbox = document.getElementById('nextbox'); 
    nextbox.style.display = (nextbox.style.display === 'none') ? 'flex' : 'none';
}