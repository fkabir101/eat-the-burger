$(document).ready(function(){

  $(".mark-complete").on("click", function() {

    const id = $(this).attr("data-id");
    $.ajax({
      url: "/api/" + id,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    // read id from button
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/api/" + id,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    const burgerItem = {
      burger: $("#burger-input").val().trim()
    }
    console.log(burgerItem.burger);
    $.ajax({
      url: "/api/",
      method: "POST",
      data: burgerItem
    })
    .then(function(data) {
      location.reload();
    });
  });

});