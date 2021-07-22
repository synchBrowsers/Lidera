import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

/* eslint-disable */
const slider = () => {
	const sliderElement = new Swiper('.gallery__slider', {
        spaceBetween: 45,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
	});
};
export default slider;
/* eslint-enable */