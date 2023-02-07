import React from 'react';
import {AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import styles from './SocialNetworks.module.scss';
import Link from 'next/link';
import {ScreenEgg} from '../index';

const initialSocialNetworks = [
  {
    id: 1,
    href: 'http://youtube.com/',
    icon: AiFillYoutube,
  },
  {
    id: 2,
    href: 'http://twitter.com/',
    icon: AiFillTwitterCircle,
  },
  {
    id: 3,
    href: 'http://instagram.com/',
    icon: AiFillInstagram,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/',
    icon: AiFillLinkedin,
  },
];

const SocialNetworks = () => {
  return (
    <ScreenEgg type="left">
      <ul className={styles.list}>
        {initialSocialNetworks.map((socialNetwork) => {
          return (
            <li className={styles.listItem} key={socialNetwork.id}>
              <Link className={styles.listLink} target="_blank" href={socialNetwork.href}>
                {React.createElement(socialNetwork.icon, {color: 'black', size: 50})}
              </Link>
            </li>
          );
        })}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
