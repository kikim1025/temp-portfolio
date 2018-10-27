const getJoke = function() {
    $.ajax({
        url: "https://icanhazdadjoke.com/",
        method: 'GET',
        beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
        }
    }).then(function(response) {
        $(".joke__message").text(response);
    })
}