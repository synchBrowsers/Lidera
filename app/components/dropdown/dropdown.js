// Табы

const dropdown = () => {
	const dropdownWrap = document.querySelectorAll('.dropdown')[0];
	const dropdownButton = document.querySelectorAll('.dropdown__button')[0];
	const dropdownContent = document.getElementsByClassName('dropdown__content')[0];

	const dropdownToggle = () => {
		dropdownContent.classList.toggle('active');
		dropdownButton.classList.toggle('active');

		document.addEventListener('click', (event) => {
			const isClickInside = dropdownWrap.contains(event.target);
			if (!isClickInside) {
				dropdownContent.classList.remove('active');
				dropdownButton.classList.remove('active');
			}
		});
	};

	dropdownButton.addEventListener('click', dropdownToggle);
};

export default dropdown;