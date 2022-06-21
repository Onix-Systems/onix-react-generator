import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Film.module.scss';

export default function Film({ film }) {
  return (
    <div>
      <p>
        {film.Title}
      </p>
      <img className={styles.appBanner} src={film.Poster} alt={film.Title} />
    </div>
  );
}

Film.propTypes = {
  film: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired
  }).isRequired
};
