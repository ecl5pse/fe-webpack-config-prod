import createUserCard from './components/UserCard';

export default function (employees) {
  const listContainer = document.getElementById('cardContainer')

  employees.forEach( employees => {
    listContainer.appendChild( createUserCard(employees) );
  } );
  return listContainer;
}