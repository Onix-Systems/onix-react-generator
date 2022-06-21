import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/About.module.scss';

export default function AboutView({ title }) {
  return (
    <div>
      <p className={styles.appIntro}>{title}</p>
    </div>
  );
}

AboutView.propTypes = {
  title: PropTypes.string.isRequired
};
