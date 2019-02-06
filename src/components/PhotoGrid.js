import React, { Component } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";

const numColumns = 3;

class PhotoGrid extends Component {
  renderPhoto = ({ item }) => {
    const { onPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress({ photoId: item.id })}>
        <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
      </TouchableOpacity>
    );
  };

  render() {
    const { photos } = this.props;

    return (
      <FlatList
        data={photos}
        renderItem={this.renderPhoto}
        numColumns={numColumns}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

const gridItemWidth = Dimensions.get("window").width / numColumns;

const styles = StyleSheet.create({
  image: {
    width: gridItemWidth,
    height: gridItemWidth
  }
});

PhotoGrid.propTypes = {
  photos: PropTypes.array,
  onPress: PropTypes.func,
  loading: PropTypes.bool
};

export default PhotoGrid;
