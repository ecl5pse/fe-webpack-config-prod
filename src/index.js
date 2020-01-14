import './assets/sass/style.scss';
import './assets/sass/header.scss';
import './assets/sass/reset.scss';

 fetch('./data/employees.json').
 then(response => response.json()).
 then(appendCardsToList).
 catch(console.error);

 function appendCardsToList(employees) {

 const cardsListElem = document.getElementById('cardsList');

 employees.forEach(
 employees => {
 cardsListElem.appendChild(createCardsList(employees));
 },
 );

 }

 function createCardsList(employees) {

 const cardListItem = createCardListItem(employees);
 cardListItem.appendChild(createCardPictureContainer(employees));
 cardListItem.appendChild(createCardsFullName(employees));
 cardListItem.appendChild(createCardWork(employees));
 cardListItem.appendChild(createCardAboutMe(employees));
 cardListItem.appendChild(createCardContact(employees));

 return cardListItem;

 }

 function createCardListItem(employees) {

 const cardListItem = document.createElement('li');
 cardListItem.setAttribute('id', employees.id);
 cardListItem.classList.add('cardListItem');
 return cardListItem;
 }

 function createCardPictureContainer(employees) {

 const createCard = document.createElement('div');
 createCard.classList.add('profilePictureContainer');
 createCard.append(createUserPicture(employees));
 return createCard;
 }

 function createUserPicture(employees) {

 const createUserPicture = document.createElement('img');
 createUserPicture.setAttribute('src', employees.profilePicture);
 return createUserPicture;
 }

 function createCardsFullName({name, surname}) {

 const cardsFullName = document.createElement('h4');
 cardsFullName.classList.add('cardsFullName');
 cardsFullName.innerText = `${name} ${surname}`;
 return cardsFullName;

 }

 function createCardWork({work}) {
 const cardsWork = document.createElement('p');
 cardsWork.classList.add('cardsWork');
 cardsWork.innerText = `${work}`;
 return cardsWork;
 }

 function createCardAboutMe({aboutMe}) {
 const cardsAboutMe = document.createElement('p');
 cardsAboutMe.classList.add('cardsAboutMe');
 cardsAboutMe.innerText = `${aboutMe}`;
 return cardsAboutMe;
 }

 function createCardContact(employees) {
 const cardContact = document.createElement('ul');
 cardContact.classList.add('cardContact');
 cardContact.append(createCardContainer(employees));
 return cardContact;

 }

 function createCardContainer(employees) {

 const cardContainer = document.createElement('a');
 cardContainer.classList.add('cardShare');
 cardContainer.setAttribute('href', '#');
 cardContainer.innerHTML = '<i class="fab fa-facebook"></i> <i class="fab fa-twitter"></i> <i class="fab fa-linkedin-in"></i>  <i class="fab fa-google-plus-g"></i>';
 return cardContainer;
 }



 //=======SLIDER===========================////

 const currentSlid = 0;

 const slider = document.getElementById("slider");

 slider.appendChild(createSlider());


 function createSlider() {

 const sliderContainer = document.createElement('div');
 const sliderImage = document.createElement('img');
 const sliderText = document.createElement("h3");
 const  text = document.createElement("p");
 const buttonNext = document.createElement('button');
 const buttonPrev = document.createElement('button');
 sliderContainer.classList.add("sliderContainer");
 sliderImage.setAttribute("src","./assets/images/testimonial-1.jpg");
 sliderText.innerText="\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo\n";

 text.innerText= "SUSAN SIMS, INTERACTION DESIGNER AT XYZ"
 sliderContainer.append(sliderImage)
 sliderContainer.append(sliderText);
 sliderContainer.append(text);
 sliderContainer.append(buttonNext);
 sliderContainer.append(buttonPrev);



 buttonNext.onclick = ()=>{
 sliderImage.setAttribute("src","./assets/images/testimonial-2.jpg");
 sliderText.innerText="\"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....\"";
 };

 buttonPrev.onclick = ()=>{
 sliderImage.setAttribute("src","./assets/images/testimonial-1.jpg");
 sliderText.innerText="\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo\n" +
 "            quam...\"";
 };

 return  sliderContainer;
 }
