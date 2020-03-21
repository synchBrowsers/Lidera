const tabs = () => {
	const tabLinks = document.querySelectorAll('.js-tabs');

	const tabSwitch = (tab) => {
		const self = tab.target;
		const content = self.parentNode.parentNode.childNodes;
		const target = self.getAttribute('data-tab');

		self.parentElement.querySelectorAll('.active').forEach((e) => {
			e.classList.remove('active');
		});

		self.classList.add('active');

		[...content].forEach((inner) => {
			const tabContent = inner.getAttribute('data-content');

			if (tabContent === target) {
				inner.parentElement.querySelectorAll('.tabs__content.active').forEach((f) => {
					f.classList.remove('active');
				});
				inner.classList.add('active');
			}
		});
	};

	[...tabLinks].forEach((tabLink) => {
		tabLink.addEventListener('click', tabSwitch);
	});
};

export default tabs;