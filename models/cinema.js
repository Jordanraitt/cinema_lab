const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listTitles = function(){
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function(film){
  return this.films.find(function(n) {return n === film} );
};

Cinema.prototype.checkByYear = function(year){
  return this.films.some(film => film.year === year)
};

Cinema.prototype.allCheckLength = function(length){
  return this.films.every(film => film.length > length);
};

Cinema.prototype.timeOfAllFilms = function(){
  const reducer = (a, film) => a + film.length
  return this.films.reduce(reducer, 0)
};

Cinema.prototype.filmsByProperty = function(name, value){

  return this.films.filter((film) => {
    return film[name] === value;
  });
}
  // else if (name === year)

















module.exports = Cinema;
