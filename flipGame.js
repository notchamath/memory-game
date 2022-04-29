
const getCards = () => {
    return document.querySelectorAll('.cards');
}

//returns a number between 1 and num, bounds included
const randomizer = (num) => {
    return Math.floor(Math.random()*num) + 1
}

const getRandom = (numOfPics, numOfDivs) => {

    let arr = [];
    let rand1;
    let rand2;

    while(arr.length < numOfDivs){

        let num = randomizer(numOfPics);

        if(arr.indexOf(num) === -1) arr.push(num);
    }

    do{
        rand1 = randomizer(arr.length)-1;
        rand2 = randomizer(arr.length)-1;
    } while (rand1 === rand2);

    let duplicate = arr[rand1]
    arr[rand2] = duplicate;

    return arr;
}

const getPics = (numOfDivs) => {

    let pics = [];
    let numOfPics = 10; // Pics folder has 10 pics

    let nums = getRandom(numOfPics, numOfDivs);

    for(let pic=0; pic<numOfDivs; pic++){
        pics[pic] = `url('Pics/${nums[pic]}.jpg')`
    }

    return pics;
} 

const populateCards = (divs, pics) => {

    for (let div=0; div<divs.length; div++){

        divs[div].addEventListener('mousedown', e => {

            divs[div].style.backgroundImage = pics[div];
            divs[div].style.backgroundSize = 'cover';

            console.log(divs[div])
        });
    }

}

const initGame = () => {
    
    let divs = getCards();
    let pics = getPics(divs.length);
    populateCards(divs, pics);
    
}

initGame();