$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#image_list a").click(function(evt) {
        // prevent the default action of the link
        evt.preventDefault();  

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // fade out the image and caption over a duration of one second
        $("#caption").fadeOut(1000, function() {
            // After the caption fade out is complete, this callback function will execute

            // set the new caption
            $("#caption").text(caption);

            // fade in the new caption over a duration of one second
            $("#caption").fadeIn(1000);
        });

        $("#image").fadeOut(1000, function() {
            // After the image fade out is complete, this callback function will execute

            // set the new image
            $("#image").attr("src", imageURL);

            // fade in the new image over a duration of one second
            $("#image").fadeIn(1000);
        });
    }); 

    // move focus to first thumbnail
    $("li:first-child a").focus();
});
