const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listTitles = function(){
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function(film){
  return this.films.find(function(n) {return n === film} )
}

module.exports = Cinema;
