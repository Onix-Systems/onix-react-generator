import React from 'react';
import loader from '../../assets/images/loader.svg';
import styles from './sass/Loader.module.scss';

export default function Loader() {
  return (
    <div>
      <img
        src={loader}
        className={styles.appLoader}
        alt="loader"
      />
    </div>
  );
}
