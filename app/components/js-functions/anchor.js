// Плавный скролл к яконю

const anchor = () => {
	const anchorLinks = document.querySelectorAll('.js-anchor');

	const scroll = (link) => {
		link.preventDefault();

		const self = link.target;
		const target = self.getAttribute('href').substr(1);
		const content = document.getElementById(target);

		content.scrollIntoView({
			behavior: 'smooth',
		});
	};

	[...anchorLinks].forEach((anchorLink) => {
		anchorLink.addEventListener('click', scroll);
	});
};

export default anchor;
