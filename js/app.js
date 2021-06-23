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
 let arr = [];

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
  
     
    
    do {leftIndex = randomNumber(0, imgArray.length - 1);
        rightIndex = randomNumber(0, imgArray.length - 1);
        middelIndex = randomNumber(0, imgArray.length - 1);
      } while( leftIndex === middelIndex || leftIndex === rightIndex || middelIndex === rightIndex ||
       arr.includes(leftIndex) || arr.includes( middelIndex) || arr.includes(rightIndex) );
       arr = [];
      arr.push(leftIndex,middelIndex,rightIndex);


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

     
   if((e.target.id === 'rightImage' || e.target.id === 'leftImage'|| e.target.id === 'middelImage') && (counter <= round)){
         
        if(e.target.id === 'rightImage' ){
          Img.all[rightIndex].click++
        }
        if(e.target.id === 'leftImage' ){
          Img.all[leftIndex].click++
        }
        if(e.target.id === 'middelImage' ){
          Img.all[middelIndex].click++
        }

    
      }
      counter++;
      render();    
     if(counter>=round){
      drawChart();
     }
}
      
      
    
    function printResult(p){

      
      for (let i = 0; i < Img.all.length; i++) {
        let li = document.createElement('li');
        ul.appendChild (li)
        li.textContent = `${Img.all[i].name} had ${Img.all[i].click} votes, and was seen ${Img.all[i].views} times.`
      }
      viewResult.removeEventListener('click', printResult);
      drawChart();
      }

     

      imageSection.addEventListener('click', clickFunction)
        viewResult.addEventListener('click', printResult);

render();


function drawChart() {

  let name = [];
  let views = [];
  let click = [];

  for(let i = 0; i < Img.all.length; i++) {
    name.push(Img.all[i].name);
    views.push(Img.all[i].views);
    click.push(Img.all[i].click);
  }
  var ctx = document.getElementById('myChart').getContext( '2d' );
  console.log(ctx,'test');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: name,
        labelsClick: click,
        datasets: [{
            label: '# of views',
            data: views,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  myChart.datasets
}








leftImage.setAttribute('src', Img.all[0].src)
 let index = randomNumber(0, imgArray.length - 1);





      function randomNumber( min, max ) {
        min = Math.ceil( min );
        max = Math.floor( max );
        return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
      }








