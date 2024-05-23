window.addEventListener('DOMContentLoaded', () => {

	// main-------------------------------------------------
	// const btnMain = document.querySelector('.btn_open-main');
	// btnMain.addEventListener('click', function() {
	// 	window.location.href = '../../index.html';
	// 	console.log('click');
	// });

	// hamburger--------------------------------------------
	function hamburger() {
		const hamburger = document.querySelector('.hamburger'),
			span = document.querySelectorAll('.hamburger__span-line'),
			menu = document.querySelector('.menu'),
			closeElem = document.querySelector('.menu__close');
		console.log(span);
		hamburger.addEventListener('click', () => {
			menu.classList.add('menu_active');
			span.forEach(function(item) {
				item.style.border = '2px';
				item.style.borderStyle = 'solid';
				item.style.borderColor = 'rgb(19, 54, 118)';
				item.style.background = 'rgb(217, 220, 236)';
				console.log(item);				
			});			
		});		
		closeElem.addEventListener('click', () => {
			menu.classList.remove('menu_active');
			span.forEach(function(item) {
				item.style.border = 'none';
				item.style.borderStyle = 'none';
				item.style.borderColor = 'none';
				item.style.background = 'rgb(19, 54, 118)';
				console.log(item);				
			});			
		});
	}
	hamburger();

});