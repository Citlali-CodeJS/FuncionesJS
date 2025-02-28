
/*----- FUNCION NORMAL
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*-----/


 /*----- Con Funcion Anonima-------*/
 const ele = document.getElementById("ele1");
 const pintar = function(color = 'green'){ 
    ele.style.backgroundColor = color;
 /*-- punto 2.3 para que sea verde normalmente y amarillo al dar click--*/
 }
ele.addEventListener("click", function() {
  ele.style.backgroundColor = 'yellow';  
});

pintar()