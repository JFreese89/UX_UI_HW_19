console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    $(".icon-container img").hover(
        function(){
            $(this).css("transform", "scale(1.5)");
        }, function() {
            $(this).css("transform", "scale(1)");
        }
    );
});