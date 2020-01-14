import createLinkItem from '../ContactLink/Component/Contact/index';

export default function(links, className) {
  const socialIconsContainer = document.createElement('ul');

  links.forEach(link => {
    socialIconsContainer.appendChild(createLinkItem(link));
  });

  socialIconsContainer.classList.add(...className);
  return socialIconsContainer;
}