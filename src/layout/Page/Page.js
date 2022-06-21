import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/translates/actions';
import PageView from './PageView';

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <PageView>
        {children}
      </PageView>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => ({
  locale: state.translates.locale,
  messages: state.translates.messages
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
