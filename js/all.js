let gotobtn = document.querySelector(".gotobtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 && document.documentElement.scrollTop < 3960) {
        gotobtn.style.opacity = 1;
    } else{
        gotobtn.style.opacity = 0;
    }
}

function gotowhere() {
    window.scrollTo({ top: 3970, behavior: 'smooth' });
}

gotobtn.addEventListener('click',gotowhere)