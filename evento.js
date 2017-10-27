var Evento = function(sujeto){
  this._sujeto = sujeto;
  this._observadores = [];
};

Evento.prototype = {
  suscribir: function(observador){
    this._observadores.push(observador);
  },
  notificar: function(args) {
    for (var i = 0; i < this._observadores.length; i++) {
      this._observadores[i](this._sujeto, args);
    }
  }
};
