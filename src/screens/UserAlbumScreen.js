import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PhotoGrid from "../components/PhotoGrid";
import PhotoModal from "../components/PhotoModal";
import { fetchAlbumPhotos, setPhoto, unsetPhoto } from "../store/actions/index";

/**
 * A screen showing a grid of photos from the selected album.
 */

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

  onPressPhoto = ({ photoId }) => {
    const { onSetPhoto } = this.props;
    onSetPhoto(photoId);
  };

  exitCurrentPhoto = () => {
    const { onUnsetPhoto } = this.props;
    onUnsetPhoto();
  };

  render() {
    const { albums } = this.props;

    return (
      <View>
        <PhotoModal
          visible={!!albums.currentPhoto}
          photo={albums.currentPhoto}
          onClose={this.exitCurrentPhoto}
        />
        <PhotoGrid
          photos={albums.photos}
          onPress={this.onPressPhoto}
          loading={albums.loading}
        />
      </View>
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
    onFetchAlbumPhotos: albumId => dispatch(fetchAlbumPhotos(albumId)),
    onSetPhoto: photoId => dispatch(setPhoto(photoId)),
    onUnsetPhoto: () => dispatch(unsetPhoto())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAlbumScreen);
