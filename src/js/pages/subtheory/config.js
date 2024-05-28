window.addEventListener('DOMContentLoaded', () => {

	// to-carousel1-------------------------------------------------
	const btnConfig1 = document.querySelector('.btn_open-carousel1');
	btnConfig1.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel1.html';
		// console.log('click');
	});
	// to-carousel2-------------------------------------------------
	const btnConfig2 = document.querySelector('.btn_open-carousel2');
	btnConfig2.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel2.html';
		// console.log('click');
	});
	// to-carousel3-------------------------------------------------
	const btnConfig3 = document.querySelector('.btn_open-carousel3');
	btnConfig3.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel3.html';
		// console.log('click');
	});
	// to-carousel4-------------------------------------------------
	const btnConfig4 = document.querySelector('.btn_open-carousel4');
	btnConfig4.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel4.html';
		// console.log('click');
	});
	// to-carousel5-------------------------------------------------
	const btnConfig5 = document.querySelector('.btn_open-carousel5');
	btnConfig5.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel5.html';
		// console.log('click');
	});
	// to-carousel6-------------------------------------------------
	const btnConfig6 = document.querySelector('.btn_open-carousel6');
	btnConfig6.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel6.html';
		// console.log('click');
	});
	// to-carousel7-------------------------------------------------
	const btnConfig7 = document.querySelector('.btn_open-carousel7');
	btnConfig7.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel7.html';
		// console.log('click');
	});
	// to-carousel8-------------------------------------------------
	const btnConfig8 = document.querySelector('.btn_open-carousel8');
	btnConfig8.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel8.html';
		// console.log('click');
	});
	// to-carousel9-------------------------------------------------
	const btnConfig9 = document.querySelector('.btn_open-carousel9');
	btnConfig9.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel9.html';
		// console.log('click');
	});
	// to-carousel10-------------------------------------------------
	const btnConfig10 = document.querySelector('.btn_open-carousel10');
	btnConfig10.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel10.html';
		// console.log('click');
	});
	// to-carousel11-------------------------------------------------
	const btnConfig11 = document.querySelector('.btn_open-carousel11');
	btnConfig11.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel11.html';
		// console.log('click');
	});
	// to-carousel12-------------------------------------------------
	const btnConfig12 = document.querySelector('.btn_open-carousel12');
	btnConfig12.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel12.html';
		// console.log('click');
	});
	// to-carousel13-------------------------------------------------
	const btnConfig13 = document.querySelector('.btn_open-carousel13');
	btnConfig13.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel13.html';
		// console.log('click');
	});
	// to-carousel14-------------------------------------------------
	const btnConfig14 = document.querySelector('.btn_open-carousel14');
	btnConfig14.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel14.html';
		// console.log('click');
	});
	// to-carousel15-------------------------------------------------
	const btnConfig15 = document.querySelector('.btn_open-carousel15');
	btnConfig15.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel15.html';
		// console.log('click');
	});
	

	// hamburger--------------------------------------------
	function hamburger() {
		const hamburger = document.querySelector('.hamburger'),
			span = document.querySelectorAll('.hamburger__span-line'),
			menu = document.querySelector('.menu'),
			closeElem = document.querySelector('.menu__close');
		// console.log(span);
		hamburger.addEventListener('click', () => {
			menu.classList.add('menu_active');
			span.forEach(function(item) {
				item.style.border = '2px';
				item.style.borderStyle = 'solid';
				item.style.borderColor = 'rgb(19, 54, 118)';
				item.style.background = 'rgb(217, 220, 236)';
				// console.log(item);				
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

	// modal----------------------------------------------------
	const btnModal = document.querySelector('.btn_open-modal');
	btnModal.addEventListener('click', function() {
		openModalWindow();
	});
	function openModalWindow() {
		const modalWindow = document.querySelector('.modal');
		modalWindow.classList.add('show');		
		modalWindow.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}
	function closeModalWindow() {
		const modalWindow = document.querySelector('.modal');
		modalWindow.classList.add('hide');
		modalWindow.classList.remove('show');
		document.body.style.overflow = '';
	}
	closeModalWindow();
	function modal() {
		const modalTrigger = document.querySelectorAll('[data-modal]');
		
		const modalWindow = document.querySelector('.modal');
		
		modalTrigger.forEach(btn => {
			btn.addEventListener('click', () => openModalWindow('.modal'));
		});
		
		modalWindow.addEventListener('click', (e) => {
			if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
				closeModalWindow('.modal');
			}
		});
		document.addEventListener('keydown', (e) => { 
			if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
				closeModalWindow('.modal');
			}
		});
	}	
	modal();

});