import './styles.scss';
import createPicture  from '../../../Picture';
import userCardElem from './userCardElem';
import createSocialNetworksLinksList from '../../../ContactLink';



export default function (employees) {
  const cardContainer = document.createElement( 'div' );
  cardContainer.appendChild(userCardElem(employees));
  return cardContainer;
}