import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Colors from "../constants/ColorDefs";
const MovieCard = (props) => {
  const { onMovieCardClick = () => {}, item } = props;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        onMovieCardClick();
      }}
    >
      <Image
        resizeMode="contain"
        style={styles.posterImage}
        source={{ uri: item?.poster }}
      />
      <Text numberOfLines={2}  style={styles.movieTitle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.CLR_00000030,
    height: '100%',
    width: 100,
    borderRadius: 2,
    marginRight: 20,
    overflow: "hidden",
    justifyContent:'space-between'
  },
  posterImage: {
    width: "100%",
    height:150
  },
  movieTitle: {
    fontSize: 14,
    flex:1,
    fontWeight: "400",
    color: Colors.WHITE,
    textShadowColor: Colors.BLACK,
  },
});
