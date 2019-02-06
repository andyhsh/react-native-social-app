import React, { Component } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Spinner extends Component {
  render() {
    const { loading } = this.props;
    return (
      loading && (
        <ActivityIndicator style={styles.loading} animating={loading} />
      )
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    justifyContent: "center",
    height: 100
  }
});

Spinner.propTypes = {
  loading: PropTypes.bool
};

export default Spinner;
