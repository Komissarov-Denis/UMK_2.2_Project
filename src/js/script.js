window.addEventListener('DOMContentLoaded', () => {

	// hamburger------------------------------------------------
	// const menu = document.querySelector('.header_nav_menu');
	// const menuItem = document.querySelectorAll('.header_nav_menu_item');
	// const hamburger = document.querySelector('.header_nav_block_hamburger');

	// hamburger.addEventListener('click', () => {
	// 	hamburger.classList.toggle('header_nav_block_hamburger_active');
	// 	menu.classList.toggle('header_nav_menu_active');
	// });

	// menuItem.forEach((item) => {
	// 	item.addEventListener('click', () => {
	// 		hamburger.classList.toggle('header_nav_block_hamburger_active');
	// 		menu.classList.toggle('header_nav_menu_active');
	// 	});
	// });

	// theory---------------------------------------------------
	const btnTheory = document.querySelector('.btn_open-theory');
	btnTheory.addEventListener('click', function() {
		window.location.href = '../src/html/pages/theory.html';
		// console.log('click');
	});

	// practice-------------------------------------------------
	const btnPractice = document.querySelector('.btn_open-practice');
	btnPractice.addEventListener('click', function() {
		window.location.href = '../src/html/pages/practice.html';
		// console.log('click');
	});

	// tests-------------------------------------------------
	const btnTests = document.querySelector('.btn_open-tests');
	btnTests.addEventListener('click', function() {
		window.location.href = '../src/html/pages/tests.html';
		// console.log('click');
	});

	// main-------------------------------------------------
	// const btnMain = document.querySelector('.btn_open-main');
	// btnMain.addEventListener('click', function() {
	// 	window.location.href = '../src/html/pages/index.html';
	// 	// console.log('click');
	// });

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
