var Persona = function(nombre){
  this.nombre = nombre;
  this.nombreActualizado = new Evento(this);
};

Persona.prototype.cambiarNombre = function(nuevoNombre){
  this.nombre = nuevoNombre;
  this.nombreActualizado.notificar();
}

var juan = new Persona('Juan');

var monitorDeNombre = function(persona){
  this.persona = persona;
  var that = this;
  this.persona.nombreActualizado.suscribir(function(){
    console.log(that.persona.nombre);
  })
}

var monitorDeJuan = monitorDeNombre(juan);
