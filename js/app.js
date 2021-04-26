const images = document.querySelectorAll('.slider .slider-track__item_img');
const sliderLine = document.querySelector('.slider .slider-track');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__btn_next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider__btn_back').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}


let trigger = false;
document.querySelector('.material-icons-outlined').addEventListener('click', function () {
    trigger = !trigger;
    console.log(trigger);

    if (trigger){
        document.querySelector(".burger-menu__links").style.display =  'flex';
        document.querySelector('.material-icons-outlined').style.color = "rgb(255, 123, 0)";
    }else{
        document.querySelector(".burger-menu__links").style.display =  'none';
        document.querySelector('.material-icons-outlined').style.color = "rgb(53, 53, 53)";
    }
});
