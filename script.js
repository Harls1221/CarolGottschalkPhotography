var i = 0; //start point
var images = [];
var time = 3000;

//image list

images[0] = 'photo.jpg';
images[1] = 'photo1.jpg';
images[2] = 'photo2.jpg';
images[3] = 'photo3.jpg';
images[4] = 'photo4.jpg';
images[5] = 'photo5.jpg';
images[6] = 'photo6.jpg';
images[7] = 'photo7.jpg';
images[8] = 'photo8.jpg';
images[9] = 'photo9.jpg';
images[10] = 'photo10.jpg';

//change image

function changeImg(){
    document.slide.src = images[i];
    
    if (i  <images.length - 1){
        i++;
        
    } else {
        i = 0;
        
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;