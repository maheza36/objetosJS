/* jshint esversion: 6 */
//Animal Function
var Animal = function(
  numero_patas = 4,
  carnivoro = false,
  pelaje = false,
  numero_de_ojos = 2,
  nombre="beautiful_pet"
)
{
  return{
     numero_patas:    numero_patas,
     carnivoro:       carnivoro,
     pelaje:          pelaje,
     numero_de_ojos:  numero_de_ojos,
     nombre:          nombre,
     comer:function(){
       if (carnivoro===true){
         return "Carnivoro";
       } else {
         return "No carnivoro";
       }
     }
  };
};

//crear jirafa de tipo Animal
var jirafa = new Animal(4,false,true,2,"jirafinha");

//Pokemon Function

var Pokemon = function(
  tipo=     "Fuego",
  poder=    500,
  energia=  100,
  fuerza=   250,
  atacar=   10
){
  //var pokemon = new Animal();
  Pokemon_Animal = Object.create(Animal());
  Pokemon_Animal.tipo = tipo;
  Pokemon_Animal.poder = poder;
  Pokemon_Animal.energia = energia;
  Pokemon_Animal.fuerza = fuerza;
  Pokemon_Animal.atacar = function(){
    if((energia/fuerza)>1){
      return "gano";
    }
    else {
        return "perdio";
    }
  }
  return Pokemon_Animal;
}
