window.addEventListener('DOMContentLoaded', () => {

	// main-------------------------------------------------
	const btnMain = document.querySelector('.btn_open-main');
	btnMain.addEventListener('click', function() {
		window.location.href = '../../index.html';
		console.log('click');
	});

});