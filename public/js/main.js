$(document).ready(function() {
  
  $(".addTodoBtn").click(function() {
    $("#addTodoForm").css("display", "block");
    $(this).css("display", "none");
  })
  $(".cancelTodoBtn").click(function() {
    $("#addTodoForm").css("display", "none");
    $(".addTodoBtn").css("display", "inline-block");
  })

  $(".delete-todo").on("click", function(e) {
    var answer = confirm("Are you sure you want to delete this todo?");
    if (answer == true) {
      $target = $(e.target);
      const id = $target.attr("data-id");
      $.ajax({
        type: "DELETE",
        url: "/todos/" + id,
        success: function(response) {
          window.location.href = "/";
        },
        error: function(error) {
          console.log(error);
        }
      });
    }
  });
});
