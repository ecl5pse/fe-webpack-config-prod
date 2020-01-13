import './styles.scss';
import createPicture from '../../../Picture';


export default function (user) {
  const cardContainer = document.createElement( 'div' );
  const userPicture = createPicture( user.profilePicture, '/assets/user_icon.png', 'profile picture', ['userImg', 'lskdjf', 'sldf'] );





























  cardContainer.appendChild( userPicture );
  return cardContainer;
}