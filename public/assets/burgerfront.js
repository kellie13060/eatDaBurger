$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var addBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function() {
            console.log("New burger added!");
            location.reload();
        });
    });

    $(".devourburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured!");
            location.reload();
        });
    });

    $(".deleteburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});