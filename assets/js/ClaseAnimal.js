//Clase animal.
export default class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
  this._nombre = nombre 
  this._edad = edad 
  this._img = img 
  this._comentarios = comentarios 
  this._sonido = sonido 
  }
  //Getters.
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  get img() {
    return this._img;
  }
  get comentarios() {
    return this._comentarios;
  }
  get sonido() {
    return this._sonido;
  }
  //Setter.
  set comentarios(nuevo_comentario){
    this._comentarios = nuevo_comentario
  }
}

//Clase leon.
class Leon extends Animal {
  constructor(rugir) {
    super(nombre, edad, img, comentarios, sonido);
  }

  //Getters.
  get rugir(){
    return this._rugir;
  }
  
}

//Clase lobo.
class Lobo extends Animal {
  constructor(aullar) {
    super(nombre, edad, img, comentarios, sonido);
  }

  //Getters
  get aullar(){
    return this._aullar;
  }

}

//Clase oso.
class Oso extends Animal {
  constructor(grunir) {
    super(nombre, edad, img, comentarios, sonido);
  }

  //Getters.
  get grunir(){
    return this._grunir;
  }
 
}

//Clase serpiente.
class Serpiente extends Animal {
  constructor(sisear) {
    super(nombre, edad, img, comentarios, sonido);
  }

  //Getters.
  get sisear(){
    return this._sisear;
  }
  
}

//Clase aguila.
class Aguila extends Animal {
  constructor(chillar) {
    super(nombre, edad, img, comentarios, sonido);
  }

  //Getters
  get chillar(){
    return this._chillar;
  }
 
}



