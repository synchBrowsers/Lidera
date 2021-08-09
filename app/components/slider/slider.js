import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

/* eslint-disable */
const slider = () => {
	const sliderElement = new Swiper('.gallery__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            767: {
                spaceBetween: 45,
                slidesPerView: 'auto',
                centeredSlides: true,
            }
        }
	});
};
export default slider;
/* eslint-enable */