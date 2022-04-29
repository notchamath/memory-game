
const getCards = () => {
    return document.querySelectorAll('.cards');
}

const getPics = () => {

    let pics = [];
    let numOfPics = 10; // Pics folder has 10 pics

    for(let pic=0; pic<numOfPics; pic++){
        pics[pic] = `url('Pics/${pic+1}.jpg')`;
    }

    return pics;
} 

const getRandom = (len) => {

    let num = Math.floor(Math.random()*len)

    return num;
}

const populateCards = (divs, pics) => {

    for (let div=0; div<divs.length; div++){

        let rand = getRandom(divs.length);

        divs[div].addEventListener('mousedown', e =>{

            console.log(rand)
            console.log(pics)
            console.log(divs[div])

            divs[div].style.backgroundImage = pics[rand];
            divs[div].style.backgroundSize = "cover";
        });

    } 
}

const initGame = () => {
    
    let divs = getCards();
    let pics = getPics();
    populateCards(divs, pics);
    
}

initGame();