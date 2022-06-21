import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import HomeView from './HomeView';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: ''
    };
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke = () => {
    fetch('https://geek-jokes.sameerkumar.website/api').then((res) => {
      if (res.status === 200) {
        res.json().then((joke) => {
          this.setState({ information: joke });
        });
      }
    }).catch(() => {});
  }

  render() {
    const { information } = this.state;
    const { t } = this.props;
    return (
      <HomeView
        information={information}
        getJoke={this.getJoke}
        title={t('homePage')}
        buttonTitle={t('newJoke')}
      />
    );
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Home);
