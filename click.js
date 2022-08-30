function change() {
    document.querySelector('p').innerHTML = 'Article pour homme';
    if (document.querySelector('p').innerHTML === 'Article pour homme') {
        document.querySelector('p').innerHTML = 'Article pour femme';

    } else if (document.querySelector('p').innerHTML === 'Article pour femme') {
        document.querySelector('p').innerHTML = 'Article pour homme';
    }
}
document.querySelector('button').onclick = change;