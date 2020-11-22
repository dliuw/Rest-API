function show_menu(){
  $.getJSON('data/pizza.json', function(data){
    let menu = data.menu;
    $('#daftar-menu').html('');
    for(const e of menu){
      $('#daftar-menu').append(`<div class="col-md-4">
      <div class="card mb-3">
        <img src="img/pizza/${e.gambar}" class="card-img-top" alt="${e.nama} Picture">
        <div class="card-body">
          <h5 class="card-title">${e.nama}</h5>
          <p class="card-text">${e.deskripsi}</p>
          <h5 class="card-title">Rp. ${e.harga}</h5>
          <a href="#" class="btn btn-primary">Pesan Sekarang</a>
        </div>
      </div>
    </div>`);
    }
  });
}

show_menu();

$('.nav-link').on('click', function(e){
  e.preventDefault()
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  let kategori = $(this).html();
  $('h1').html(kategori);

  if(kategori == 'All Menu'){
    show_menu();
    return;
  }

  $.getJSON('data/pizza.json', function(data){
    let menu = data.menu;
    let content = '';

    for(const e of menu){
      if(e.kategori == kategori.toLowerCase()){
        content += `<div class="col-md-4">
        <div class="card mb-3">
          <img src="img/pizza/${e.gambar}" class="card-img-top" alt="${e.nama} Picture">
          <div class="card-body">
            <h5 class="card-title">${e.nama}</h5>
            <p class="card-text">${e.deskripsi}</p>
            <h5 class="card-title">Rp. ${e.harga}</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
        </div>`
      }
    }

    $('#daftar-menu').html(content)
  });
})