function hello() {
    if (document.querySelector('h1').innerHTML === 'Hello!') {
        document.querySelector('h1').innerHTML = 'Goodbye';
    } else {
        document.querySelector('h1').innerHTML = 'Hello!';
    }

}