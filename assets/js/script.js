var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.anima'),
			animationClass = 'anima-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 9);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});

function toggleMenu() {
	var menu = document.getElementById('nav');
	var menuIcon = document.getElementById('menuIcon');

	if (menu.style.display === 'block') {
		menu.style.display = 'none';
		menuIcon.src = 'assets/img/bars-solid.svg';
	} else {
		menu.style.display = 'block';
		menuIcon.src = 'assets/img/x-solid.svg';
	}
}
