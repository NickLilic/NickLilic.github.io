// preload hero image
const img = new Image();
img.onload = function() { 
    console.log('loaded loader');
}
img.src = "/imgs/logo.png";

const imgBg = new Image();
imgBg.onload = function() { 
    if(document.getElementById('hero-bg')) {
        document.getElementById('hero-bg').classList.add("animated");
        document.getElementById('hero-bg').classList.add("fadeIn");
        document.getElementById('hero-bg').classList.remove("hidden");
    }
}
imgBg.src = "/imgs/hero.png";

/*
 * General helper functions
 */
function scrollTo(elementId) {
    const el = document.getElementById(elementId);
    el.scrollIntoView();

}