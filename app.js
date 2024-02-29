/*

class Fichas {
    constructor(numero){
        this.num = numero;
    }

}

class Estado_ficha extends Fichas{
    constructor(numero, estado){
        super(Fichas);
        this.estado = estado;

    }
}

class Seleccion_ficha extends Estado_ficha{
    constructor(seleccion, numero, estado){
        super (Estado_ficha);
        this.seleccion = seleccion;
    }

}
*/

/*
function Ficha (numero, estado, seleccionado) {
    this.Num = numero;
    this.Estado = estado;
    this.Seleccion = seleccionado;
}
*/

class Ficha {
    /* 
    numero = numero de la ficha ej 2/6
    estado = en que estado está la ficha: "nada" "mano" "juego" "tapado"
    */
    constructor (numero, estado, seleccionado, posx, posy){
        this.Num = numero;
        this.Estado = estado;
        this.Seleccion = seleccionado;
        this.PosX = posx;
        this.PosY = posy;
    }
    Ver_seleccion(){
        return this.Seleccion;
    }
}


/*
var cartas = [new Ficha(0/6,"nada",false),new Ficha(1/6,"nada",false),new Ficha(2/6,"nada",false),new Ficha(3/6,"nada",false),new Ficha(4/6,"nada",false),new Ficha(5/6,"nada",false),new Ficha(6/6,"nada",false),new Ficha(0/5,"nada",false),new Ficha(1/5,"nada",false),new Ficha(2/5,"nada",false),new Ficha(3/5,"nada",false),new Ficha(4/5,"nada",false),new Ficha(5/5,"nada",false),new Ficha(0/4,"nada",false),new Ficha(1/4,"nada",false),new Ficha(2/4,"nada",false),new Ficha(3/4,"nada",false),new Ficha(4/4,"nada",false),new Ficha(0/3,"nada",false),new Ficha(1/3,"nada",false),new Ficha(2/3,"nada",false),new Ficha(3/3,"nada",false),new Ficha(0/2,"nada",false),new Ficha(1/2,"nada",false),new Ficha(2/2,"nada",false),new Ficha(0/1,"nada",false),new Ficha(1/1,"nada",false),new Ficha(0/0,"nada",false)];


var cartas = [
    [new Ficha(0/6,"nada",false),new Ficha(1/6,"nada",false),new Ficha(2/6,"nada",false),new Ficha(3/6,"nada",false),new Ficha(4/6,"nada",false),new Ficha(5/6,"nada",false),new Ficha(6/6,"nada",false)] 
    [new Ficha(0/5,"nada",false),new Ficha(1/5,"nada",false),new Ficha(2/5,"nada",false),new Ficha(3/5,"nada",false),new Ficha(4/5,"nada",false),new Ficha(5/5,"nada",false)]
    [new Ficha(0/4,"nada",false),new Ficha(1/4,"nada",false),new Ficha(2/4,"nada",false),new Ficha(3/4,"nada",false),new Ficha(4/4,"nada",false)]
    [new Ficha(0/3,"nada",false),new Ficha(1/3,"nada",false),new Ficha(2/3,"nada",false),new Ficha(3/3,"nada",false)]
    [new Ficha(0/2,"nada",false),new Ficha(1/2,"nada",false),new Ficha(2/2,"nada",false)]
    [new Ficha(0/1,"nada",false),new Ficha(1/1,"nada",false)]
    [new Ficha(0/0,"nada",false)]
];
*/

var cartas = [
    [new Ficha("0/6","nada",false),new Ficha("1/6","nada",false),new Ficha("2/6","nada",false),new Ficha("3/6","nada",false),new Ficha("4/6","nada",false),new Ficha("5/6","nada",false),new Ficha("6/6","nada",false)], 
    [new Ficha("0/5","nada",false),new Ficha("1/5","nada",false),new Ficha("2/5","nada",false),new Ficha("3/5","nada",false),new Ficha("4/5","nada",false),new Ficha("5/5","nada",false)],
    [new Ficha("0/4","nada",false),new Ficha("1/4","nada",false),new Ficha("2/4","nada",false),new Ficha("3/4","nada",false),new Ficha("4/4","nada",false)],
    [new Ficha("0/3","nada",false),new Ficha("1/3","nada",false),new Ficha("2/3","nada",false),new Ficha("3/3","nada",false)],
    [new Ficha("0/2","nada",false),new Ficha("1/2","nada",false),new Ficha("2/2","nada",false)],
    [new Ficha("0/1","nada",false),new Ficha("1/1","nada",false)],
    [new Ficha("0/0","nada",false)]
];

var mano =[];

const tbody = document.querySelector('#posicion_fichas tbody');
tbody.addEventListener('click', function (e) {
    const cell = e.target.closest('td');
    if (!cell) {return;} // Quit, not clicked on a cell
    const pos_y = cell.parentElement.rowIndex;   //row.rowIndex nos da la fila, lo cual sería segunda posicion del array [][x]
    const pos_x = cell.cellIndex;
    console.log(cell.innerHTML, pos_y , pos_x);  //cell.cellIndex nos da la columna, lo cual sería el primer dato del array [x][]
    cartas[pos_x][pos_y].PosX = pos_x;
    cartas[pos_x][pos_y].PosY = pos_y;
    cartas[pos_x][pos_y].Seleccion = (cartas[pos_x][pos_y].Seleccion == true)? false : true;
    
    console.log(recuperar_array_seleccion(cartas,true));

});

function recuperar_array_seleccion (nombre_array,dato){
    var nuevo_array = [];
    var array_temp =[];
    for (var i=0;i<nombre_array.length;i++){
        array_temp = nombre_array[i].filter(function (e){return (e.Seleccion == dato)});
        array_temp.forEach(element => {
            nuevo_array.push(element)
        });
    }
    return nuevo_array;
}


/*
    Funciones de Botones
 */

function boton_aceptar() {
    mano = recuperar_array_seleccion(cartas,true);
    console.log(mano);
    var i = 0;
    mano.forEach(element => {
        document.querySelector('#mano_' + (i+1)).textContent = mano[i].Num;
        i++;
    });
}
