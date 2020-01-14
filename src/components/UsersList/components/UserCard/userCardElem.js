import textElements                  from './textElements';
import createPicture                 from '../../../Picture';
import createSocialNetworksLinksList from '../../../ContactLink';


export default function(employees) {

  const userCardElem = document.createElement('div');
  const userPicture = createPicture( employees.userAvatar, '/assets/images/Layer 43.png', 'profile picture', ['profilePictureContainer'] );
  userCardElem.classList.add('cardListItem');
  userCardElem.appendChild(userPicture);
  userCardElem.appendChild(textElements(employees));
  userCardElem.appendChild(createSocialNetworksLinksList(employees.contacts,["social-icons"]));


  return userCardElem;
}