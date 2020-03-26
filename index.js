const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
const slide = document.querySelector('.slide-img');
const dots = [...document.querySelectorAll('.dot')];
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const btnPlay = document.querySelector('.play');
const btnStop = document.querySelector('.stop');
let active = 0;
const time = 2000;
let play = false;
let index;

//change active dot

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

//change slide image    

const changeSlide = () => {
slide.src = images[active];
changeDot();
active++;

if(active === images.length){
    active = 0;
}

console.log(active)
}

//change slide on dot click

dots.forEach(dot => dot.addEventListener('click', () => {
    const currentDot = dots.indexOf(dot);
    console.log(play)
    if (play === true) {
        
        clearInterval(index);
    }
    active = currentDot;
    console.log(active)
    slide.src = images[active];
    changeDot();
    if(play === true){
         setInterval(changeSlide,time);
         
    }  
    
}))

//next prev on click

const nextPrev = (e) => {

if (e.target.classList.contains('next') || e.target.classList.contains('prev')){
    
    if (play === true) {
        clearInterval(index);
        active--;
    }
    if(e.target.classList.contains('next')) {
        active === images.lenght -1 ? active = 0 : active++;
    }else if(e.target.classList.contains('prev')){
        active === 0 ? active = images.length -1 : active--;
    }
    slide.src = images[active];
    changeDot(); 
    if(play === true){
        index = setInterval(changeSlide,time);
       
   } 
} 
}

next.addEventListener('click', nextPrev);
prev.addEventListener('click', nextPrev)
btnPlay.addEventListener('click', () => {
     index = setInterval(changeSlide,time);
     play = true;
} )

btnStop.addEventListener('click', () => {
    clearInterval(index);
    play = false;
})


