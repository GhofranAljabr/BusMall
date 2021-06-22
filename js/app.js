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
let viewResult = document.getElementById( 'viewResult' );
let listOfResults = document.getElementById( 'listOfResults' );
let ul =document.getElementById('listOfResults');

let round = 25;

let counter = 0;

 
 let leftIndex;
 let rightIndex;
 let middelIndex;


function Img( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  this.click =0;
  Img.all.push(this);
}

Img.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  let ImgName =imgArray[i].split('.')[0];
  new Img( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render() {
     leftIndex = randomNumber(0, imgArray.length - 1);
    
    do {
        rightIndex = randomNumber(0, imgArray.length - 1);
        middelIndex = randomNumber(0, imgArray.length - 1);
      } while( leftIndex === middelIndex || leftIndex === rightIndex || middelIndex === rightIndex );

      


      rightImage.src = Img.all[rightIndex].src;
      leftImage.src = Img.all[leftIndex].src;
      middelImage.src = Img.all[middelIndex].src;
    
      Img.all[rightIndex].views++;
      Img.all[leftIndex].views++;
      Img.all[middelIndex].views++;
    
      console.log(Img.all);
    }
    
   render();

    function clickFunction(e) {
     
        if((e.target.id === 'rightImage' || e.target.id === 'leftImage'|| e.target.id === 'middelImage') && counter < 25){
         
        if(e.target.id === 'rightImage' ){
          Img.all[rightIndex].click++
        }
        if(e.target.id === 'leftImage' ){
          Img.all[leftlIndex].click++
        }
        if(e.target.id === 'middelImage' ){
          Img.all[middelIndex].click++
        }
          render();
          
           counter++;

      
      }
      
    }
    function printResult(p){
      for (let i = 0; i < Img.all.length; i++) {
        let li = document.createElement('li');
        ul.appendChild (li)
        li.textContent = `${Img.all[i].name} had ${Img.all[i].click} votes, and was seen ${Img.all[i].views} times.`
        }
        viewResult.removeEventListener('click', printResult);
      }

     

      imageSection.addEventListener('click', clickFunction)
        viewResult.addEventListener('click', printResult);

render();
leftImage.setAttribute('src', Img.all[0].src)
 let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;




      function randomNumber( min, max ) {
        min = Math.ceil( min );
        max = Math.floor( max );
        return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
      }








