"use strict";

let numberOfFilms;


let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();


function writeYourGenres(n) {
  for (n = 1; n <= 3; n++) {
    const x = prompt(`Ваш любимый жанр под номером ${n}`);
    personalMovieDB.genres[n - 1] = x;
  }
}
writeYourGenres();

for (let i = 0; i < 2; i++) {
  let a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?');
  personalMovieDB.movies[a] = b;
}

function start(params) {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
  while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
  }
}

function NumberFilms(params) {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log('слишком мало');
  }
}