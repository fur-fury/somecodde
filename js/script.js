$(document).ready(function(){ 

	//$('h1').hide();

	//$('li').each(function(){
		//var item_height = $(this).height();
		//$(this).height(item_height);
		//alert($(this).text());
		//console.log(item_height)
	//});
	////$('li:first').text("whaaaaat");
	//$(document).on('click', 'a.more', function(){
		//console.log('hyyyyy');
		//return false;
	//});

	//$('ul').append('e">Expedita?</a></li><li>Sint quae omnis ipsa, quo repellendus praesentium quaerat nesciunt maiores?<br><a href="" class="more">Ab.</a></li>');
	$('.tab__title a').on('click',  function(){
		$(this)
			.closest('.tab')
			.find('.tab__title')
			.removeClass('tab__title--active');

		$(this).closest('.tab__title').addClass('tab__title--active');
		
		$(this)
			.closest('.tab')
			.find('.tab__content')
			.removeClass('tab__content--active');
		
		var target_id = $(this).attr('href');
		$(target_id).addClass('tab__content--active');

		return false;
	});

});
