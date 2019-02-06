import React, { Component } from "react";
import { Modal, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/theme";

class PhotoModal extends Component {
  render() {
    const { visible, photo, onClose } = this.props;

    if (!photo) {
      return <View />;
    }

    return (
      <Modal animationType="fade" visible={visible} transparent={false}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Icon name="close" size={50} color={colors.gray} />
          </TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: photo.url }}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.black
  },
  close: {
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

PhotoModal.propTypes = {
  visible: PropTypes.bool,
  photo: PropTypes.object,
  onClose: PropTypes.func.isRequired
};

export default PhotoModal;
