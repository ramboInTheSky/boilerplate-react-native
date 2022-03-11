import React, { Component, PropTypes } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../../actions';

import img from '../../assets';
import { layout, text } from '../../styles';
const layoutStyles = StyleSheet.create(layout);
const textStyles = StyleSheet.create(text);

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
      <View>
        <Image
          style={layoutStyles.logo}
          source={img.Amido}
        />
        <Text style={textStyles.title}>Welcome to { appName }</Text>
        <Text style={textStyles.body}>origin: { origin || 'Loading...' }</Text>
      </View>
    )
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
