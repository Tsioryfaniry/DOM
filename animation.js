/* function anim() {
       document.querySelector('h1').style.color = 'red';
      document.querySelector('.container')

}
document.querySelector('button').onclick = anim; */

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
            document.querySelector('#animate').style.backgroundColor = '#000000';
        } else if (pos => 350) {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            document.querySelector('#animate').style.backgroundColor = 'blue';

        }
    }
}
document.querySelector('button').onclick = myMove;