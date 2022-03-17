var rotationRadians = 1.5707969999999967;
var direccion = 0;
var xSpeed = 1;
var ySpeed = 1;


function alante(){
    console.log("alante");
    console.log("rotationRadians "+ rotationRadians);
    spider.position.x = spider.position.x+1*Math.cos(rotationRadians);
    spider.position.z = spider.position.z+1*Math.sin(rotationRadians);
    console.log("x: "+ spider.position.x);
    console.log("z: "+ spider.position.z);
}   

//Función que se ejecuta para mover el objeto hacia atras
function atras(){ 
    console.log("alante");
    console.log("rotationRadians "+ rotationRadians);
    spider.position.x = spider.position.x-1*Math.cos(rotationRadians);
    spider.position.z = spider.position.z-1*Math.sin(rotationRadians);
    console.log("x: "+ spider.position.x);
    console.log("z: "+ spider.position.z);
}

//Función que se ejecuta para rotar hacia la izquierda
function izquierda(){
    rotationRadians = rotationRadians - 0.0174533;
    rotateObject(spider,0,1,0); 

    if(rotationRadians==6.28319){
        rotationRadians = 0;
    }  
    if(rotationRadians== -6.28319){
        rotationRadians = 0;
    }           

}

//Función que se ejecuta para rotar hacia la derecha
function derecha(){
    rotationRadians = rotationRadians + 0.0174533;

    if(rotationRadians==6.28319){
        rotationRadians = 0;
    }  
    if(rotationRadians== -6.28319){
        rotationRadians = 0;
    }    
    rotateObject(spider,0,-1,0);
}