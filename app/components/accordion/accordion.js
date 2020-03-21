const accordion = () => {
	const toggleLinks = document.querySelectorAll('.accordion__link');

	const toggleSwitch = (toggle) => {
		const self = toggle.target;

		self.classList.toggle('active');
		self.nextSibling.classList.toggle('active');
	};

	[...toggleLinks].forEach((toggleLink) => {
		toggleLink.addEventListener('click', toggleSwitch);
	});
};

export default accordion;