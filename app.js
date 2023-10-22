

function Next() {
    let nextbox = document.getElementById('nextbox'); 
    let borderbox = document.getElementById('borderbox');
    nextbox.style.opacity = (nextbox.style.opacity === '0') ? '1' : '0';
    borderbox.style.opacity = (borderbox.style.opacity === '1') ? '0' : '1';

   
}