function initPopup(){
    // const region1 = document.querySelector('.region-1');
    const region2 = document.querySelector('.region-2');
    const region3 = document.querySelector('.region-3');
    const region4 = document.querySelector('.region-4');
    const region5 = document.querySelector('.region-5');
    const btn1 = document.querySelector('#button0'
    );
    const btn2 = document.querySelector('#button1');
    const btn3 = document.querySelector('#button2');
    // const cardButton1 = document.querySelectorAll('.card-button')[0];
    // const cardButton2 = document.querySelectorAll('.card-button')[1];
    // const cardButton3 = document.querySelectorAll('.card-button')[2];

    const btnList = [btn1, btn2, btn3, region2,region3, region4,region5]
    const pCross = document.querySelector('#popup-cross');
    btnList.forEach((btn) => btn.addEventListener(('click'), showPopup))
    pCross.addEventListener('click', hidePopup);

}

function showPopup(){
    const popup = document.querySelector('.main--popup');
    if (popup.classList.contains("popup-hide")){
        popup.classList.remove("popup-hide");
        popup.classList.add("popup-show");
    }
    else{
        return;
    }
}

function hidePopup(){
    const popup = document.querySelector('.main--popup');
    if (popup.classList.contains('popup-show')){
        popup.classList.remove('popup-show');
        popup.classList.add('popup-hide');
    }
    else{
        return;
    }
}

