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
    constructor (numero, estado, seleccionado){
        this.Num = numero;
        this.Estado = estado;
        this.Seleccion = seleccionado;
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


const tbody = document.querySelector('#posicion_fichas tbody');
tbody.addEventListener('click', function (e) {
  const cell = e.target.closest('td');
  if (!cell) {return;} // Quit, not clicked on a cell
  const row = cell.parentElement;   //row.rowIndex nos da la fila, lo cual sería segunda posicion del array [][x]
  console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);  //cell.cellIndex nos da la columna, lo cual sería el primer dato del array [x][]

  cartas[cell.cellIndex][row.rowIndex].Seleccion = (cartas[cell.cellIndex][row.rowIndex].Seleccion == true)? false : true;
  //console.log(cartas[0][0].Seleccion);
  var new_array = cartas.filter(function e(){return (e.Seleccion == true)});
  console.log(new_array);
  //console.log(cartas.prototype.filter.call(element => element.Seleccion == true));
  var newArray = cartas.filter(function (el) {
    return el.Estado == "nada";
  });
  console.log(newArray);

});

function recuperar_array (nombre_array,arg,dato){
    
}

