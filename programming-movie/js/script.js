function search_movie(){
  $.ajax({
    url: 'http://www.omdbapi.com',
    type: 'GET',
    dataType: 'JSON',
    data: {
      'apikey': '713e3358',
      's' : $('#search-input').val()
    },
    success: function(data){
      if(data.Response == "True"){
        let movies = data.Search;
        $('#movie-list').html('')
        for(const e of movies){
          $('#movie-list').append(`<div class="col-md-4">
          <div class="card mb-3">
            <img src="${e.Poster}" class="card-img-top" alt="${e.Title} Picture">
            <div class="card-body">
              <h5 class="card-title">${e.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
              <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${e.imdbID}">See Detail</a>
            </div>
          </div>
        </div>`)
        }
        $('#search-input').val('')
      } else {
        $('#movie-list').html(`
        <div class="col">
          <h1 class="text-center">${data.Error}</h1>
        </div>
        `);
      }
    }
  });
}

$('#search-button').on('click', function(){
  search_movie();
});

$('#search-input').on('keyup', function(e){
  if(e.keyCode === 13){
    search_movie();
  }
});

$(document).on('click', '.see-detail', function(){
  $.ajax({
    url: 'http://www.omdbapi.com',
    type: 'GET',
    dataType: 'JSON',
    data: {
      'apikey': '713e3358',
      'i' : $(this).attr('data-id')
    },
    success: function(data){
      if(data.Response === "True"){
        $('.modal-body').html(`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${data.Poster}" class="img-fluid">
              </div>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><h3>${data.Title}</h3></li>
                  <li class="list-group-item">Released : ${data.Released}</li>
                  <li class="list-group-item">Genre : ${data.Genre}</li>
                  <li class="list-group-item">Director : ${data.Director}</li>
                  <li class="list-group-item">Actors : ${data.Actors}</li>
                </ul>
              </div>
            </div>
          </div>
        `);
      }
    }
  });
});