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

	// modal----------------------------------------------------	
	// console.log();

	const btn = document.querySelector('.btn_open-modal');
	btn.addEventListener('click', function() {
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
	function modal() { // => modal('[data-modal]', '.modal', modalTimerId); добавим два аргумента triggerSelector, modalSelector для инкапсуляции 
		const modalTrigger = document.querySelectorAll('[data-modal]'); // '[data-modal]'
		// console.log(modalTrigger);
		const modalWindow = document.querySelector('.modal'); // '.modal'
		// console.log(modalWindow);
		// const modalCloseBtn = document.querySelector('[data-close]'); // для ДЕЛЕГИРОВАНИЯ СОБЫТИЙ убираем данную переменную
		modalTrigger.forEach(btn => {
			btn.addEventListener('click', () => openModalWindow('.modal')); // переданная в обработчик события коллбэк функция openModalWindow(modalSelector)) не дожна сразу вызываться, а просто объявляться, () => стрелочная функция оборачивает коллбэк и вызывает его по клику
		});
		// modalCloseBtn.addEventListener('click', closeModalWindow); // для ДЕЛЕГИРОВАНИЯ СОБЫТИЙ убираем данную часть
		modalWindow.addEventListener('click', (e) => {
			if (e.target === modalWindow || e.target.getAttribute('data-close') == '') { // если куда кликнул пользователь (целевое событие) совпадает с модальным окном или имеет дата-аттрибут 'data-close' (ничего в него не помещаем), то модальное окно закрывается!!!
				closeModalWindow('.modal'); // для ДЕЛЕГИРОВАНИЯ СОБЫТИЙ добавляем условие - (e.target === modalWindow || e.target.getAttribute('data-close') == '')
			}
		});
		document.addEventListener('keydown', (e) => { // событие по нажатию клавиши 
			if (e.code === 'Escape' && modalWindow.classList.contains('show')) { // метод code === 'Escape' отслеживает keydown - событие по нажатию клавишы ESC, что закрывает модальное окно
				closeModalWindow('.modal'); // также modalWindow.classList.contains('show')) проверяет наличие открытого модального окна, чтобы отработала функция closeModalWindow()
			}
		});
	}	
	modal();
});
