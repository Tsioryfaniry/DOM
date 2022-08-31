function change() {

    let paraSelec = document.querySelector('p');
    let buttonSelec = document.querySelector('button');
    let title = document.querySelector('h1');
    let bg = document.querySelector('section');
    let image = document.querySelector('img');
    image.style.width = '150px';


    if (paraSelec.innerHTML === 'Article pour homme', title.innerHTML === 'Homme', buttonSelec.innerHTML === 'change femme') {
        paraSelec.innerHTML = 'Article pour femme';
        title.innerHTML = 'Femme';
        buttonSelec.innerHTML = 'change homme';
        bg.style.backgroundColor = 'pink';
        bg.style.color = 'black';
        image.src = "temoignages.jpeg";
    } else {
        paraSelec.innerHTML = 'Article pour homme';
        document.querySelector('h1').innerHTML = 'Homme';
        buttonSelec.innerHTML = 'change femme';
        bg.style.backgroundColor = 'blue';
        bg.style.color = 'white';
        image.src = "images.jpeg";

    }
}

document.querySelector('button').onclick = change;