const backgroundImages = [
    './images/1.jpg',
    './images/123.jpg',
    './images/2.jpg',
];

let currentImageIndex = 0;


function changeBackgroundImage() {
    document.querySelector('.background').style.backgroundImages = 'url(${backgroundImages[currentImageIndex]})';
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    setTimeout(changeBackgroundImage, 5000);

}

changeBackgroundImage();