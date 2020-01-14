export default function(employees) {

  const textElements = document.createElement('div');
  textElements.appendChild(createCardsFullName(employees));
  textElements.appendChild(createCardWork(employees));
  textElements.appendChild(createCardAboutMe(employees));

  function createCardsFullName({name, surname}) {

    const cardsFullName = document.createElement('h4');
    cardsFullName.classList.add('cardsFullName');
    cardsFullName.innerText = `${name} ${surname}`;
    return cardsFullName;
  }

  function createCardWork({position}) {
    const cardsWork = document.createElement('p');
    cardsWork.classList.add('cardsWork');
    cardsWork.innerText = `${position}`;
    return cardsWork;
  }

  function createCardAboutMe({info}) {
    const cardsAboutMe = document.createElement('p');
    cardsAboutMe.classList.add('cardsAboutMe');
    cardsAboutMe.innerText = `${info}`;
    return cardsAboutMe;
  }

  return textElements;
}