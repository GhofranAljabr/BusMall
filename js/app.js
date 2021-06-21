'use strict';

let imgArray = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
  
];



let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById( 'leftImage' );
let middelImage = document.getElementById( 'middelImage' );
let rightImage = document.getElementById( 'rightImage' );


let counter = 0;

function Img( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  Img.all.push(this);
}

Img.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  
  new Img( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render() {
    let leftIndex = randomNumber(0, imgArray.length - 1);
    let rightIndex;
    do {
        rightIndex = randomNumber(0, imgArray.length - 1);
      } while( leftIndex === rightIndex );

      let middelIndex;

      do {
        middelIndex = randomNumber(0, imgArray.length - 1);
      } while( leftIndex === middelIndex);
      ( rightIndex === middelIndex );


      rightImage.src = Img.all[rightIndex].src;
      leftImage.src = Img.all[leftIndex].src;
      middelImage.src = Img.all[leftIndex].src;
    
      Img.all[rightIndex].views++;
      Img.all[leftIndex].views++;
      Img.all[middelIndex].views++;
    
      console.log(Img.all);
    }

    function eventHandler(e) {
     
        if((e.target.id === 'rightImage' || e.target.id === 'leftImage'|| e.target.id === 'middelImage') && counter < 25){
          render();
          console.log(counter);
          counter++;
      
        }
      
      }

      imageSection.addEventListener('click', eventHandler);

render();
leftImage.setAttribute('src', Img.all[0].src)
 let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;




      function randomNumber( min, max ) {
        min = Math.ceil( min );
        max = Math.floor( max );
        return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
      }








