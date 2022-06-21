import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as translateActions from '../../store/translates/actions';
import Title from '../../components/Title/Title';
import styles from './sass/Header.module.scss';

function Header({
  home, about, actions, message, locale
}) {
  return (
    <header className={styles.appHeader}>
      <Title text={message} />
      <Link to="/" className={styles.headerLink}>
        {home}
      </Link>
      <Link to="/about" className={styles.headerLink}>
        {about}
      </Link>
      <button
        className={styles.toggleLanguage}
        data-testid="toggle-language-button"
        type="button"
        onClick={actions.changeLanguage}
      >
        {locale}
      </button>
    </header>
  );
}

Header.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    changeLanguage: PropTypes.func.isRequired
  }).isRequired,
  message: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  locale: state.translates.locale
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(translateActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
