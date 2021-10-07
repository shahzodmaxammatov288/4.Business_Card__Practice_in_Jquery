$(function(){

	$('.front').on('click',function(){
		$('.card-front').slideToggle(1000);
	});
	$('.back').on('click',function(){
		$('.card-back').slideToggle(1000);
	});

});

const btns = document.querySelectorAll('.btn');

	btns.forEach(function(b) {
		b.addEventListener('click', () => {
			b.classList.toggle('active');
		});
	});
