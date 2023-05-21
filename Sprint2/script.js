$(document).ready(function() {

    // gallery olan bütün imagelere fancybox özelliği ekliyoruz
    $("gallery").fancybox();


});

$(document).ready(function(){
    // header ı üstte tutan fonksiyon
    $("#yazi2").sticky({topSpacing:0});

   
});

//fotorama classı olan div içerisinde geziniyors
$(document).ready(function () {
    $('.fotorama').fotorama({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
  });
  var a =3;




