
const divBlue = document.querySelector('#blue');
const divRed = document.querySelector('#red');
const divGreen = document.querySelector('#green');
const divYellow = document.querySelector('#yellow');
const divKey=document.querySelector('#key')
const colorea = (elemento) => (elemento.style.backgroundColor= "black");
divBlue.addEventListener('click', () => colorea(divBlue));
divRed.addEventListener('click', () => colorea(divRed));
divGreen.addEventListener('click', () => colorea(divGreen));
divYellow.addEventListener('click', () => colorea(divYellow));

document.addEventListener('keydown',function(event){
    if (event.key ==='a'){
        divKey.style.backgroundColor='pink';
    }else if (event.key ==='s'){
        divKey.style.backgroundColor='orange';
    }else if (event.key ==='d'){
        divKey.style.backgroundColor='skyblue';
    }else if (event.key ==='q'){
        creaDivs('purple');
    }else if (event.key ==='w'){
        creaDivs('grey');
    }else if (event.key ==='e'){
        creaDivs('#795548'); /*--- no use 'brown' porque luce como un rojizo--*/
    }
})

function creaDivs(color){
    const nuevoDiv =document.createElement('div');
    nuevoDiv.style.width='200px';
    nuevoDiv.style.height='200px';
    nuevoDiv.style.margin='2px';
    nuevoDiv.style.marginTop='5px';
    nuevoDiv.style.marginLeft= '120px';
    nuevoDiv.style.backgroundColor=color
    document.body.appendChild(nuevoDiv);
}
/*--- Hice algunas modificaciones en el margin de "nuevoDiv" para una mejor visualizacion---*/