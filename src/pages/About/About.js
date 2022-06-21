import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import AboutView from './AboutView';

class About extends Component {
  render() {
    const { t } = this.props;
    return (
      <AboutView
        title={t('aboutPage')}
      />
    );
  }
}

About.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(About);
