

const currentSlid = 0;

const slider = document.getElementById('slider');

slider.appendChild(createSlider());

 export default function createSlider() {

  const sliderContainer = document.createElement('div');
  const sliderImage = document.createElement('img');
  const sliderText = document.createElement('h3');
  const text = document.createElement('p');
  const buttonNext = document.createElement('button');
  const buttonPrev = document.createElement('button');
  sliderContainer.classList.add('sliderContainer');
  sliderImage.setAttribute('src', './assets/images/testimonial-1.jpg');
  sliderText.innerText = '"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo\n';

  text.innerText = 'SUSAN SIMS, INTERACTION DESIGNER AT XYZ';
  sliderContainer.append(sliderImage);
  sliderContainer.append(sliderText);
  sliderContainer.append(text);
  sliderContainer.append(buttonNext);
  sliderContainer.append(buttonPrev);

  buttonNext.onclick = () => {
    sliderImage.setAttribute('src', './assets/images/testimonial-2.jpg');
    sliderText.innerText = '"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur...."';
  };

  buttonPrev.onclick = () => {
    sliderImage.setAttribute('src', './assets/images/testimonial-1.jpg');
    sliderText.innerText = '"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo\n' +
                           '            quam..."';
  };

  return sliderContainer;
}

