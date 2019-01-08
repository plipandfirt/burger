// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eat-btn").on("click", function (event) {
        var burger = {
            id: $(this).data("id")
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burger
        }).then(
            function () {
                console.log("You ate burger ", burger.id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#add-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = $("input[name=burger-name]").val().trim();

        var burger = {
            burger_name: newBurger,
        }
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-btn").on("click", function (event) {
        var burger = {
            id: $(this).data("id")
        }

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
