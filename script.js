var radio = document.querySelector('.manual-btn')

document.getElementById('radio1').checked = true


function mostrarSlide(slideNumber) {
    document.getElementById('radio' + slideNumber).checked = true;

    const sliderSection = document.getElementById('slider');
    sliderSection.scrollIntoView({
        behavior: 'smooth',  
        block: 'start'       
    });
}

