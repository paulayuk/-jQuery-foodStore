
function init() {
  
  var itemCount = 0;
  var priceTotal = 0;
	 
  var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
  $("#showPopupNotification").click(function(){             
		popupNotification.show("item added");
   });

// Add Item to Cart
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

  // Calculate Total Price
  var price = parseInt($(this).siblings().find('.price').text()); 
  priceTotal += price;
  $('#cartTotal').text("Total: $" + priceTotal);
}); 



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});


// Empty Cart
$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Total: €" + priceTotal);
}); 



// Remove Item From Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').text(itemCount);

  // Remove Cost of Deleted Item from Total Price
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: €" + priceTotal);

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});


}

$(init);