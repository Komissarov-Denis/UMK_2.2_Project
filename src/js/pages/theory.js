window.addEventListener('DOMContentLoaded', () => {

	// main-------------------------------------------------
	const btnMain = document.querySelector('.btn_open-main');
	btnMain.addEventListener('click', function() {
		window.location.href = '../../index.html';
		console.log('click');
	});

	// hamburger--------------------------------------------
	function hamburger() {
		const hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu'),
			closeElem = document.querySelector('.menu__close');
		
		hamburger.addEventListener('click', () => {
			menu.classList.add('menu_active');
		});
		closeElem.addEventListener('click', () => {
			menu.classList.remove('menu_active');
		});
	}
	hamburger();
	
});