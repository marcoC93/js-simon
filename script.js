// Visualizzare in pagina 5 numeri casuali.

// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi



$(document).ready(function () {


// ho iniziato a dichiarare le variabili quella della lista dei numeri random ed il numero in se
var numero_random = 0 ;
var lista_numeri = [] ;


// in questo ciclo stampo 5 numeri random e li vado ad aggiungere all'array della lista dei numeri trovati
while (lista_numeri.length < 5) {
    numero_random = getRndInteger(1 , 100)
    lista_numeri.push(numero_random);
    console.log(lista_numeri);
}
 $(".lista_numeri").html('<p> ' + lista_numeri + ' </p>');

setTimeout(function( ) {
    $(".lista_numeri").removeClass("active")
}  , 3000);


 function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min ;
    }
});
