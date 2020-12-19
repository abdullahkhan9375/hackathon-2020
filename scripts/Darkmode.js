
function darkMode(){
const hamburger = document.getElementById('hamburger')
const cross = document.getElementById("cross")
hamburger.addEventListener('click', showNav)
cross.addEventListener('click', closeNav)
slider.addEventListener('click', slideAnim)

}

function slideAnim(){
    const sliderCont = document.getElementById('slider-container')
    if (sliderCont.classList.contains("slide-start")){
        console.log("Dark Mode")
        sliderCont.classList.remove("slide-start");
        sliderCont.classList.add("slide-end")
        document.documentElement.setAttribute('data-theme', 'Dark Blue')
        
    }
    else{
        console.log("Light Mode")
        sliderCont.classList.remove("slide-end");
        sliderCont.classList.add("slide-start")
        document.documentElement.setAttribute('data-theme', 'Light Blue')
    }
}

function showNav(){
    const nav = document.getElementsByClassName('side--nav')[0]
    if (nav.classList.contains("nav-hide")){
        nav.classList.remove("nav-hide")
        nav.classList.add("nav-show")
    } else{
        return;
    }
}

function closeNav(){
    const nav = document.getElementsByClassName('side--nav')[0]
    if (nav.classList.contains("nav-show")){
        nav.classList.remove("nav-show")
        nav.classList.add("nav-hide")
    } else{
        return;
    }
}

