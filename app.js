

function Next() {
    let nextbox = document.getElementById('nextbox'); 
    let boxmain = document.getElementById('boxmain'); 
    nextbox.style.opacity = (nextbox.style.opacity === '0') ? '1' : '0';
    boxmain.style.opacity = (nextbox.style.opacity === '1') ? '0' : '1';

   
}