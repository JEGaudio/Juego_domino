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
    constructor (numero, estado, seleccionado, posx, posy, lado1, lado2){
        this.Num = numero;
        this.Estado = estado;
        this.Seleccion = seleccionado;
        this.PosX = posx;
        this.PosY = posy;
        this.lado1 = numero.charAt(0);
        this.lado2 = numero.charAt(2);
        
    }
    reversar_ficha(){
        
        let x = this.Num
        let y = x.slice(2) + "/" + x.slice(0,1);
        //console.log(y);
        this.Num = y;
        x = this.lado1;
        this.lado1 = this.lado2;
        this.lado2 = x;
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
var juego = [];


var estado_juego = 0;

var ficha_anterior = "";
let tbody = document.querySelector('#posicion_fichas tbody');
tbody.addEventListener('click', function (e) {
    const cell = e.target.closest('td');
    if (!cell) {return;} // Quit, not clicked on a cell
    const pos_y = cell.parentElement.rowIndex;      //row.rowIndex nos da la fila, lo cual sería segunda posicion del array [][x]
    const pos_x = cell.cellIndex;                   //cell.cellIndex nos da la columna, lo cual sería el primer dato del array [x][]
    //console.log(cell.innerHTML, pos_y , pos_x);  
    cartas[pos_x][pos_y].PosX = pos_x;
    cartas[pos_x][pos_y].PosY = pos_y;
    if (cartas[pos_x][pos_y].Seleccion == true && cartas[pos_x][pos_y].Estado == "nada"){
        cartas[pos_x][pos_y].Seleccion = false;
        cell.className = "notselected";
    }
    else{
        if (cartas[pos_x][pos_y].Seleccion == false && cartas[pos_x][pos_y].Estado == "nada") {
            cartas[pos_x][pos_y].Seleccion = true;
            cell.className = "selected";
        }
    }
    //cartas[pos_x][pos_y].Seleccion = (cartas[pos_x][pos_y].Seleccion == true)? {false} : true;
    
    console.log(recuperar_array_seleccion(cartas,true,"nada"));
    //actualizar_selecciones();

});

let tbody2 = document.querySelector('#mano_jugador tbody');
tbody2.addEventListener('click', function (e) {
    const cell = e.target.closest('td');
    if (!cell) {return;} // Quit, not clicked on a cell
    const pos_y = mano[cell.cellIndex].PosY;      
    const pos_x = mano[cell.cellIndex].PosX;                 
    if (cartas[pos_x][pos_y].Seleccion == true && cartas[pos_x][pos_y].Estado == "mano"){
        cartas[pos_x][pos_y].Seleccion = false;
        cell.className = "notselected";
    }
    else{
        if (cartas[pos_x][pos_y].Seleccion == false && cartas[pos_x][pos_y].Estado == "mano") {
            cartas[pos_x][pos_y].Seleccion = true;
            cell.className = "selected";
        }
    }
    //cartas[pos_x][pos_y].Seleccion = (cartas[pos_x][pos_y].Seleccion == true)? {false} : true;
    
    console.log(recuperar_array_seleccion(cartas,true,"mano"));
    //actualizar_selecciones();

});

let tbody3 = document.querySelector('#mesa_juego tbody');
tbody3.addEventListener('click', function (e) {
    let cell = e.target.closest('td');
    if (!cell) {return;} // Quit, not clicked on a cell
    
    let carta_seleccionada = recuperar_array_seleccion(cartas,true,"nada");  //selección desde el tablero con todas las fichas
    if (carta_seleccionada.length == 0){
        carta_seleccionada = recuperar_array_seleccion(cartas,true,"mano"); //selección desde la mano
        if (carta_seleccionada.length == 0){
            return;  //no hay selección
        }
    
    }
    
    let pos_y = carta_seleccionada[0].PosY;      
    let pos_x = carta_seleccionada[0].PosX;
    
    
    console.log("lado 1 carta seleccionada: " + cartas[pos_x][pos_y].lado1);
    console.log("lado 2 carta seleccionada: " + cartas[pos_x][pos_y].lado2);
    console.log("cell index: " + cell.cellIndex);
    console.log("juego(cell index).lado1 " + juego[cell.cellIndex].lado1);
    console.log("juego(cell index).lado2 " + juego[cell.cellIndex].lado2);
    console.log(juego);

    if (cartas[pos_x][pos_y].lado1 == juego[cell.cellIndex].lado1 && cell.cellIndex == 0 ) {
        //carta_seleccionada[0].Num = rotar_ficha(carta_seleccionada[0].Num);
        cartas[pos_x][pos_y].reversar_ficha();
        document.getElementById("row_juego").insertCell(cell.cellIndex).innerHTML = cartas[pos_x][pos_y].Num;
        juego.unshift(cartas[pos_x][pos_y]);
        console.log(juego);
        //console.log(carta_seleccionada);
        cartas[pos_x][pos_y].Seleccion = false;
        cartas[pos_x][pos_y].Estado = "juego";
        //cartas[pos_x][pos_y].reversar_ficha();
        //console.log(cartas[pos_x][pos_y]);
        actualizar_mano();
        actualizar_clases();
        console.log(cartas);
        return;
    }
    if (cartas[pos_x][pos_y].lado2 == juego[cell.cellIndex].lado1 && cell.cellIndex == 0) {
        document.getElementById("row_juego").insertCell(cell.cellIndex).innerHTML = cartas[pos_x][pos_y].Num;
        juego.unshift(cartas[pos_x][pos_y]);
        cartas[pos_x][pos_y].Seleccion = false;
        cartas[pos_x][pos_y].Estado = "juego";
        //console.log(cartas[pos_x][pos_y]);
        actualizar_mano();
        actualizar_clases();
        console.log(cartas);
        return;
    }
    if (cartas[pos_x][pos_y].lado1 == juego[cell.cellIndex].lado2 && (cell.cellIndex != 0 || juego.length == 1)) {
        document.getElementById("row_juego").insertCell(cell.cellIndex+1).innerHTML = cartas[pos_x][pos_y].Num;
        juego.push(cartas[pos_x][pos_y]);
        cartas[pos_x][pos_y].Seleccion = false;
        cartas[pos_x][pos_y].Estado = "juego";
        //console.log(cartas[pos_x][pos_y]);
        actualizar_mano();
        actualizar_clases();
        console.log(cartas);
        return;
    }
    if (cartas[pos_x][pos_y].lado2 == juego[cell.cellIndex].lado2 && (cell.cellIndex != 0 || juego.length == 1)) {
        cartas[pos_x][pos_y].reversar_ficha();
        //carta_seleccionada[0].Num = rotar_ficha(carta_seleccionada[0].Num);
        document.getElementById("row_juego").insertCell(cell.cellIndex+1).innerHTML = cartas[pos_x][pos_y].Num; 
        juego.push(cartas[pos_x][pos_y]);
        cartas[pos_x][pos_y].Seleccion = false;
        cartas[pos_x][pos_y].Estado = "juego";
        //cartas[pos_x][pos_y].reversar_ficha();
        //console.log(cartas[pos_x][pos_y]);
        actualizar_mano();
        actualizar_clases();
        console.log(cartas);
        return;
    }

});


function recuperar_array_seleccion (nombre_array,dato,var_estado){
    let nuevo_array = [];
    let array_temp =[];
    for (var i=0;i<nombre_array.length;i++){
        array_temp = nombre_array[i].filter(function (e){return (e.Seleccion == dato && e.Estado == var_estado)});
        array_temp.forEach(element => {
            nuevo_array.push(element)
        });
    }
    return nuevo_array;
}

function actualizar_selecciones () {
    /*
    var array_temp = document.querySelector('#posicion_fichas');
    console.log(array_temp);
    */
    let array_temp=[];
    for (var i=0;i<cartas.length;i++){
        for (var j=0; j < cartas[i].length;j++){
            if (cartas[i][j].Seleccion = true){
                //document.querySelector('#posicion_fichas td').
                document.querySelector('#posicion_fichas tr:nth-child(1) td:nth-child(1)').innerHTML = 0;
            }
            else{

            }
        }
    }

}

function borrar_mano_anterior(){
    //console.log(document.querySelectorAll('#mano_jugador td'));
    document.querySelectorAll('#mano_jugador td').forEach (element => {
        element.innerHTML="";
    });
    
}

function actualizar_mano(){
    borrar_mano_anterior()
    mano = recuperar_array_seleccion(cartas,false,"mano");
            //console.log(mano);
            var i = 0;
            mano.forEach(element => {
                document.querySelector('#mano_' + (i+1)).textContent = mano[i].Num;
                //cartas[mano[i].PosX][mano[i].PosY].Estado="mano";
                //cartas[mano[i].PosX][mano[i].PosY].Seleccion=false;
                i++;
            });

}

function actualizar_clases(){
    const tbody_a = document.querySelectorAll('#posicion_fichas td');
    //console.log(tbody);
    tbody_a.forEach(element => {
        //element.className ="mano";
        switch(cartas[element.cellIndex][element.parentElement.rowIndex].Estado){
            case "mano":
                element.className = "mano";
                break;
            case "juego":
                element.className = "juego";
                break;
            default:
                element.className = "";
        }
    
    });

    const tbody2_a = document.querySelectorAll('#mano_jugador td');
    //console.log(tbody);
    tbody2_a.forEach(element => {
        //element.className ="mano";
        element.className = "notselected";    
    });
    //console.log(tbody2_a);
}

function rotar_ficha(texto){
    /*
    console.log(texto.slice(2));
    console.log(texto.slice(0,1));
    */
    return (texto.slice(2) + "/" + texto.slice(0,1));
}


/*
    Funciones de Botones
 */

function boton_aceptar() {
    switch(estado_juego){
        case 0:
            borrar_mano_anterior();
            mano = recuperar_array_seleccion(cartas,true,"nada");
            //console.log(mano);
            var i = 0;
            mano.forEach(element => {
                document.querySelector('#mano_' + (i+1)).textContent = mano[i].Num;
                cartas[mano[i].PosX][mano[i].PosY].Estado="mano";
                cartas[mano[i].PosX][mano[i].PosY].Seleccion=false;
                i++;
            });
            //console.log(cartas);
            document.querySelector('.mensaje_indicacion').innerHTML = "Indicar la primera carta que salió al juego para partir";

            actualizar_clases();
            estado_juego = 1;
            break;
        case 1:
            juego = recuperar_array_seleccion(cartas,true,"nada");
            //console.log(juego);
            document.getElementById("row_juego").insertCell(0).innerHTML = juego[0].Num;
            cartas[juego[0].PosX][juego[0].PosY].Estado="juego";
            actualizar_clases();
            estado_juego = 2;
            break;
        case 2:
            
    }    
}

function reiniciar(){
    cartas = [
        [new Ficha("0/6","nada",false),new Ficha("1/6","nada",false),new Ficha("2/6","nada",false),new Ficha("3/6","nada",false),new Ficha("4/6","nada",false),new Ficha("5/6","nada",false),new Ficha("6/6","nada",false)], 
        [new Ficha("0/5","nada",false),new Ficha("1/5","nada",false),new Ficha("2/5","nada",false),new Ficha("3/5","nada",false),new Ficha("4/5","nada",false),new Ficha("5/5","nada",false)],
        [new Ficha("0/4","nada",false),new Ficha("1/4","nada",false),new Ficha("2/4","nada",false),new Ficha("3/4","nada",false),new Ficha("4/4","nada",false)],
        [new Ficha("0/3","nada",false),new Ficha("1/3","nada",false),new Ficha("2/3","nada",false),new Ficha("3/3","nada",false)],
        [new Ficha("0/2","nada",false),new Ficha("1/2","nada",false),new Ficha("2/2","nada",false)],
        [new Ficha("0/1","nada",false),new Ficha("1/1","nada",false)],
        [new Ficha("0/0","nada",false)]
    ];
    
    mano =[];
    juego = [];
    estado_juego = 0;
    ficha_anterior = "";
    document.getElementById("row_juego").innerHTML ="";
    borrar_mano_anterior();
    actualizar_clases();
}
