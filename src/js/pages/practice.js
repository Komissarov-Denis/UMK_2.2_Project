window.addEventListener('DOMContentLoaded', () => {

	// to-main-------------------------------------------------
	// const btnMain = document.querySelector('.btn_open-main');
	// btnMain.addEventListener('click', function() {
	// 	window.location.href = '../../index.html';
	// 	console.log('click');
	// });

	// to-config-------------------------------------------------
	const btnConfig = document.querySelector('.btn_open-config');
	btnConfig.addEventListener('click', function() {
		window.location.href = '../../html/pages/subpractice/config.html';
		// console.log('click');
	});

	// to-repair-------------------------------------------------
	const btnRepair = document.querySelector('.btn_open-repair');
	btnRepair.addEventListener('click', function() {
		window.location.href = '../../html/pages/subpractice/repair.html';
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