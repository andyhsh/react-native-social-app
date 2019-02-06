import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

class Post extends Component {
  onPressComment = () => {
    const { onPress, id, title, body } = this.props;
    onPress && onPress({ post: { id, title, body } });
  };

  render() {
    const { title, body, disabled } = this.props;

    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text>{body}</Text>
        <TouchableOpacity
          style={styles.postCommentContainer}
          onPress={this.onPressComment}
          disabled={disabled}
        >
          <Icon style={styles.postCommentIcon} name="comment" size={14} />
          <Text style={styles.postCommentLink}>Comments</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 10
  },
  postTitle: {
    fontSize: fontSize.small,
    fontWeight: fontWeight.bold,
    marginBottom: 5
  },
  postCommentContainer: {
    marginTop: 5,
    alignSelf: "flex-end",
    flexDirection: "row"
  },
  postCommentIcon: {
    color: colors.teal,
    marginRight: 5
  },
  postCommentLink: {
    color: colors.teal
  }
});

Post.propTypes = {
  onPress: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  disabled: PropTypes.bool
};

export default Post;
