const hamburger = () => {
	const header = document.getElementsByClassName('header')[0];
	const burgerButton = document.getElementsByClassName('header__hamburger')[0];
	const nav = document.getElementsByClassName('header__nav')[0];

	const navToggle = () => {
		nav.classList.toggle('active');
		burgerButton.classList.toggle('active');

		document.addEventListener('click', (event) => {
			const isClickInside = header.contains(event.target);
			if (!isClickInside) {
				nav.classList.remove('active');
				burgerButton.classList.remove('active');
			}
		});
	};

	const resize = () => {
		if (window.innerWidth > 960) {
			nav.classList.remove('active');
		}
	};

	window.addEventListener('resize', resize);
	resize();

	burgerButton.addEventListener('click', navToggle);
};

export default hamburger;