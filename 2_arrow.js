/*let suma = function(a, b){
    return a + b
 } */
   
    /*--- se elimina la palabra "function" y se coloca la flecha entre el argumento y el corchete de apertura---*/
  (a, b) => {
    return a + b;
  }
    /*---se quita la palabra "return"(ya está implícito)---*/
  (a, b) => a + b;

   /*---se coloca el nombre de la variable y lo demas se coloca igual que en lo anterior---*/

   let suma = (a, b) => a + b; /* Esta es la respuesta final*/