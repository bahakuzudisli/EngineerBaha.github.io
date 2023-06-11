$(document).ready(function() {

    // gallery olan bütün imagelere fancybox özelliği ekliyoruz
    $("gallery").fancybox();


});

$(document).ready(function(){
    // header ı üstte tutan fonksiyon
    $("#yazi2").sticky({topSpacing:0});

   
});

//fotorama classı olan div içerisinde geziniyor
$(document).ready(function () {
    $('.fotorama').fotorama({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
  });

// This part is loading data from Json and Json is in other file. you have to push a button to extract all datas
let dataLoaded = false;

$('#loadData').on('click', function() {
    if (!dataLoaded) {
        dataLoaded = true;

        $.getJSON("https://raw.githubusercontent.com/EngineerBaha/EngineerBaha.github.io/main/CoffeHouseMenuContent/JsonFile.json", function(data) {
            var items = [];
            var count = 0;
            $.each(data, function(key, val) {
                items.push('<div class="custom-div">'
                + '<a class="custom-div-image" data-fancybox="gallery" href="' + val.image + '">'
                + '<img src="' + val.image + '">'
                + '</a>'
                + '<div class="custom-div-text">'
                + '<h2>' + val.price + '</h2>'
                + '<p>' + val.description + '</p>'
                + '</div>'
                + '</div>');

                count += 1;

                if(count % 3 === 0) {
                    $('<div/>', {
                        "class": 'kutu',
                        html: items.join('')
                    }).appendTo('main');
                    items = [];
                }
            });

            // To handle the remainder items
            if(items.length) {
                $('<div/>', {
                    "class": 'kutu',
                    html: items.join('')
                }).appendTo('main');
            }
        });
    }
});


//this part taking weather cast for one week. you have to push a button to extract all datas
document.getElementById('get-weather-btn').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var data = JSON.parse(xhr.responseText);
        var weatherData = data.result;
        var weatherHTML = '';
  
        weatherData.forEach(item => {
          weatherHTML += `<div class="weather-card">
                            <img class="small-image "src="${item.icon}" alt="Weather Icon">
                            <h3>${item.day} - ${item.date}</h3>
                            <p>${item.description}</p>
                            <p>${item.degree}°C</p>
                            <p>Nem: ${item.humidity}%</p>
                          </div>`;
        });
  
        document.getElementById('weather-content').innerHTML = weatherHTML;
      }
    };
  
    xhr.open("GET", "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "apikey 6jGxVH4FYALLU4Hgq1hvLO:1RWtaMDSnSbOkY3BHR2D1i");
    xhr.send();
  });
  


 
