var fullImage = document.getElementById('full-Image');
var fullImageBox = document.getElementById('full-Image-Box');
var galleryImages = document.querySelectorAll('.gallery-image');
var totalImages = galleryImages.length;
 for(let i=0; i<totalImages; i++){
    galleryImages[i].addEventListener('click', function(){
        fullImageBox.style.display = 'flex';
        var imageSrc = galleryImages[i].getAttribute('src');
        fullImage.setAttribute('src', imageSrc);
    });
 }

 var closeButton = document.getElementById('close-button');
 closeButton.addEventListener('click', function(){
    fullImageBox.style.display = 'none';
 });

var currentImageIndex = 0;
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');
prevButton.addEventListener('click', function(){
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    var imageSrc = galleryImages[currentImageIndex].getAttribute('src');
    fullImage.setAttribute('src', imageSrc);
});
nextButton.addEventListener('click', function(){
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    var imageSrc = galleryImages[currentImageIndex].getAttribute('src');
    fullImage.setAttribute('src', imageSrc);
});