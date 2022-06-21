import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import styles from './sass/Home.module.scss';

export default function HomeView({
  information, getJoke, title, buttonTitle
}) {
  return (
    <div>
      <p className={styles.appIntro}>
        {title}
      </p>
      {information ? <p>{information}</p> : <Loader />}
      <Button
        title={buttonTitle}
        buttonClass={styles.updateJoke}
        handleClick={getJoke}
      />
    </div>
  );
}

HomeView.propTypes = {
  information: PropTypes.string.isRequired,
  getJoke: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired
};
