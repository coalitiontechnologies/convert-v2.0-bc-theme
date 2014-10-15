$(window).bind('load', function(){
	setMinHeight('#SimilarMultiProductsByCustomerViews');
	setMinHeight('#SideProductRelated');
	setMinHeight('#HomeFeaturedProducts');
	setMinHeight('#HomeNewProducts');
	setMinHeight('#SideTopSellers');
	setMinHeight('#CategoryContent');
});

function setMinHeight(list){
  /* Height Issue of Product Items */
  var height = $(list+' .ProductList li:first').outerHeight();
  $(list+' .ProductList li').each(function(){
	if($(this).outerHeight() > height){
		height = $(this).outerHeight();
	}
	$(list+' .ProductList li').css({'min-height':height});
  });	
}


$(document).ready(function(){
  
  if($('#DrawerMenu .CartLink a span').text() == ''){
	$('#DrawerMenu .CartLink a span').text('(0 Items)');
  }
  
  $('input[type=checkbox], input[type=radio]').not('.UniApplied').uniform();
  
  /* Display Currency in topMenu */
  $currencyBox = $('#currencyBox').html();
  $('#currencyBox').remove();
  $('#currencyClone').html($currencyBox);
  
  $('.CurrencyList').hide();
  $('.selected-currency').click(function() {
    console.log($(this).text());
    var curDisplay = $(this).siblings("div").children(".CurrencyList");
    if(curDisplay.is(":visible")){
        curDisplay.slideUp();
    } else {
        curDisplay.slideDown();
    }
  });
  
  if($('.header .category-list').length > 0){
    $('.header .category-list > li').each(function(){
      if($(this).children('ul').length > 0){
        $(this).children('a').addClass('hasSub');
      }
    });
  }    
    
  if($('#SideTopSellers ul li:last').html() == ''){
    $('#SideTopSellers ul li:last').remove();
  }
  $('#SideTopSellers ul li:gt(3)').hide();
    
});