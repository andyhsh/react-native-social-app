import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../styles/theme";

class Album extends Component {
  onPressAlbum = () => {
    const { onPress, id, title } = this.props;
    onPress && onPress({ album: { id, title } });
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.albumContainer}>
        <TouchableOpacity onPress={this.onPressAlbum}>
          <View style={styles.albumThumbnail} />
          <Text style={styles.albumTitle} numberOfLines={1}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  albumContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  albumThumbnail: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightGray
  },
  albumTitle: {
    width: 100
  }
});

Album.propTypes = {
  onPress: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string
};

export default Album;
