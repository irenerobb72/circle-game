import $ from 'jquery'

$(() => {
  $('#pink').click(function(e) {
    var circles = $(e.target)
    circels.css('fill', '#FF00FF')
  })
})
