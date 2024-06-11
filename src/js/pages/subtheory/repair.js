window.addEventListener('DOMContentLoaded', () => {

	// to-carousel15------------------------------------------------
	const btnRepair15 = document.querySelector('.btn_open-carousel15');
	btnRepair15.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel15.html';
		// console.log('click');
	});
	// to-carousel16------------------------------------------------
	const btnRepair16 = document.querySelector('.btn_open-carousel16');
	btnRepair16.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel16.html';
		// console.log('click');
	});
	// to-carousel17------------------------------------------------
	const btnRepair17 = document.querySelector('.btn_open-carousel17');
	btnRepair17.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel17.html';
		// console.log('click');
	});
	// to-carousel18------------------------------------------------
	const btnRepair18 = document.querySelector('.btn_open-carousel18');
	btnRepair18.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel18.html';
		// console.log('click');
	});
	// to-carousel19------------------------------------------------
	const btnRepair19 = document.querySelector('.btn_open-carousel19');
	btnRepair19.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel19.html';
		// console.log('click');
	});
	// to-carousel20------------------------------------------------
	const btnRepair20 = document.querySelector('.btn_open-carousel20');
	btnRepair20.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel20.html';
		// console.log('click');
	});
	// to-carousel21------------------------------------------------
	const btnRepair21 = document.querySelector('.btn_open-carousel21');
	btnRepair21.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel21.html';
		// console.log('click');
	});
	// to-carousel22------------------------------------------------
	const btnRepair22 = document.querySelector('.btn_open-carousel22');
	btnRepair22.addEventListener('click', function() {
		window.location.href = '../../carousel/theory-pages/carousel22.html';
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
				// console.log(item);				
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