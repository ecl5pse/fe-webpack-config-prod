import { LINKS_ICON_MAP } from '../../../contacts/index.';

/**
 *
 * @param {string} href
 * @param {Array<string>} className
 */
export default function (href, className) {
  const linkElem = document.createElement('li');
  const link = document.createElement( 'a' );
  link.setAttribute( 'href', href );

  const icon = document.createElement( 'i' );
  const { hostname } = new URL( href );
  if (LINKS_ICON_MAP.has( hostname )) {
    icon.setAttribute('class', LINKS_ICON_MAP.get(new URL(href).hostname) );
  } else {
    icon.classList.add( 'fab', 'default' );
  }

  linkElem.appendChild(link);
  link.appendChild(icon)
  return linkElem;
}