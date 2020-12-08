// Click event to devour: 
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: devoured
        };

        // PUT request:
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", devoured);

                location.reload();
            }
        );
    });
    // Submit Click event:
    $(".create-form").on("submit", function (event) {
        // PreventDefault on a submit event: 
        event.preventDefault();
        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };
        console.log(newBurger.burger_name)
        // POST request:
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {

                location.reload();
            }
        );
    });

    // Delete event
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);

                location.reload();
            }
        );
    });

});