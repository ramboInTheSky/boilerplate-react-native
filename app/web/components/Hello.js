import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../../actions';
import img from '../../assets';
import { layout, text } from '../../styles';

class Hello extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      appName,
      data: {
        origin
      }
    } = this.props;

    return (
      <div style={layout.container}>
        <img
          src={img.Amido}
          alt="Amido logo"
          style={layout.logo}
        />
        <h1 style={text.title}>
          Welcome to { appName }
        </h1>
        <p style={text.body}>
          origin: { origin || 'Loading...' }
        </p>
      </div>
    );
  }
}

Hello.propTypes = {
  appName: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  data: PropTypes.object
};

Hello.defaultProps = {
  data: {}
};

const mapStateToProps = state => state.data;
const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
