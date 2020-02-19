$(document).ready(function() {
      // add item 
    $('#js-shopping-list-form').submit(function(event) {
        // stops form submission
      event.preventDefault();
        // add new item
      $('.shopping-list').append(
        '<li>' +
          '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
          '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
              '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
            '</button>' +
          '</div>' +
        '</li>'
      );
        // remove item from submit form
      $(this)[0].reset(); 
    });
  
      // delete item
    $('.shopping-list').on('click', '.shopping-item-delete', function(){
      $(this).closest('li').remove();
    });
  
      // check/uncheck item
    $('.shopping-list').on('click', '.shopping-item-toggle', function(){
  
        // toggle class checked function
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  })