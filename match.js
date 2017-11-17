/*
Hide all cards and show an image for backs of cards.
click a card to flip
click another card to flip and leave cards flipped if = match
(compare statement)
flip cards back when no match
flip all cards back once game is won
shuffle images and start new game
*/


$(document).ready( function() {
  $('img').attr('src', 'images/card.png')

var clickedImages = []

 $('img').on('click', function() {
    var source = $(this).attr('alt')
    $(this).attr('src', 'images/' + source )

 })
})
