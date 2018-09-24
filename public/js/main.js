$(document).ready(function () {
  $('.delete-todo').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/todos/'+id,
      success: function(response) {
        alert('Deleting Todo');
        window.location.href='/'
      },
      error: function(error) {
        console.log(error)
      }
    })
  })
})