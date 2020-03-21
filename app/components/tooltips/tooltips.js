const tooltips = () => {
	const tooltipTarget = document.querySelectorAll('.tooltip');

	const tooltipHover = (tootip) => {
		const tooltipText = tootip.target.dataset.tooltip;
		const position = tootip.target.getBoundingClientRect();

		if (tooltipText !== '') {
			const textDiv = document.createElement('div');
			textDiv.className = 'tooltip__content';
			textDiv.innerHTML = tooltipText;
			document.body.appendChild(textDiv);
			const height = textDiv.offsetHeight;
			textDiv.style.cssText = `left: ${position.x}px; top: calc(${position.y}px - ${height}px);`;
		}
	};

	const tooltipDelete = () => {
		const tooltipElement = document.querySelector('.tooltip__content');
		document.body.removeChild(tooltipElement);
	};

	[...tooltipTarget].forEach((tooltipEvent) => {
		tooltipEvent.addEventListener('mouseover', tooltipHover);
		tooltipEvent.addEventListener('mouseleave', tooltipDelete);
	});
};

export default tooltips;