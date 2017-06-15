const API_URL_movies = 'http://localhost:3000/api/v1/movies';
$(appReady);

function appReady() {
  getMovies().then(showMovies);
}//end app Ready

function getMovies() {
  return $.get(API_URL_movies);
}

function showMovies(movies){
  console.log('here');
  const source = $('#movies-template').html();
  const template = Handlebars.compile(source);
  console.log(template);
  const html = template({
    movies
  });
  $('main').append(html);
  console.log('heree');
  console.log(movies);
}
