import { LINKS_ICON_MAP } from '../../constants';

/**
 *
 * @param {string} href
 * @param {Array<string>} className
 */
export default function (href, className) {
  const link = document.createElement( 'a' );
  link.setAttribute( 'href', href );
  link.classList.add( ...className );

  const icon = document.createElement( 'i' );
  const { hostname } = new URL( href );
  if (LINKS_ICON_MAP.has( hostname )) {
    icon.classList.add( ...LINKS_ICON_MAP.get( hostname ) );
  } else {
    icon.classList.add( 'fab', 'default' );
  }

  link.appendChild( icon );

  return link;
}