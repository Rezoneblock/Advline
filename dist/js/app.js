// Get color from data-color.
const setColor = (ele) => {
  if (ele.data('theme')) {
    // ele.closest('.main-slider').css('background-color', ele.data('color'));
    $('.main-slider')
      .removeClass()
      .addClass('main-slider')
      .addClass(`${ele.data('theme')}`);
  }
};

// Slider.
$(document)
  .ready(function () {
    $('.main-slider').slick({
      fade: true,
      cssEase: 'linear',
      infinite: true,
      dots: true,
      arrows: false,
      appendDots: $('.main__list__pagination'),
      autoplay: true,
      autoplaySpeed: 5000,
    });
  })
  .on('init', (slick) => {
    setColor($(slick.target).find('.slick-active'));
  })
  .on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    setColor(slick.$slider.find(`[data-slick-index=${nextSlide}]`));
  });
