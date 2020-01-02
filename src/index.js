import './assets/sass/style.scss';
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




