import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, fontSize, fontWeight } from "../styles/theme";
import PhotoGrid from "../components/PhotoGrid";
import { fetchAlbumPhotos } from "../store/actions/index";

class UserAlbumScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Album")
    };
  };

  componentDidMount() {
    const { onFetchAlbumPhotos, navigation } = this.props;
    const albumId = navigation.getParam("albumId");
    onFetchAlbumPhotos(albumId);
  }

  onPressPhoto({ photoId }) {
    console.log(photoId);
  }

  render() {
    const { albums } = this.props;

    return (
      <PhotoGrid
        photos={albums.photos}
        onPress={this.onPressPhoto}
        loading={albums.loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAlbumPhotos: albumId => dispatch(fetchAlbumPhotos(albumId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAlbumScreen);
