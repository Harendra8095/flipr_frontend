//abhishek360

import { Component } from 'react';
import { connect } from 'react-redux';

class AuthHOC extends Component {
    render () {
      const { admin } = this.props.userDetails;
      return admin ? this.props.yes() : this.props.no()
    }
}

AuthHOC.defaultProps = {
  loading: () => null,
  yes: () => null,
  no: () => null
};

const mapStateToProps = ({ userDetails }) => ({ userDetails });

export default connect(mapStateToProps, {})(AuthHOC);
