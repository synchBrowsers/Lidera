// eslint-disable
import svg4everybody from 'svg4everybody';
import anchor from '../components/js-functions/anchor';
import tabs from '../components/tabs/tabs';
import dropdown from '../components/dropdown/dropdown';
import accordion from '../components/accordion/accordion';
import tooltips from '../components/tooltips/tooltips';
import hamburger from '../blocks/header/header';

window.onload = () => {
	svg4everybody();
	anchor();
	tabs();
	hamburger();
	dropdown();
	accordion();
	tooltips();
};
// eslint-enable