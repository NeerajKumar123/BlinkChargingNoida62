import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import {useNavigation} from '@react-navigation/native';
import * as Colors from '../constants/ColorDefs';
import AppHeader from '../comps/AppHeader';

const MovieDetails = (props) => {
  const navigation = useNavigation();

  const { movie } = props?.route?.params;
  const release_year = movie?.released_on?.split("-")?.[0];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BLACK,
      }}>
      <AppHeader
        title={movie?.title}
        onLeftClicked={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
      style={{ width: "100%"}}
      contentContainerStyle= { {paddingBottom:20 }}
      >
        <Image
          resizeMode="cover"
          key = 'image'
          style={styles.backdropImage}
          source={{ uri: movie?.backdrop }}
        />
        <View key={"posterImageContainer"} style={styles.posterImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.posterImage}
            source={{ uri: movie?.poster }}
          />
          <View style={styles.ratingContainer}>
            <Text
              style={{
                fontSize: 14,
                color: Colors.WHITE,
                fontWeight: "500",
                marginTop: 50,
              }}
            >
              {`Rating (${movie?.imdb_rating})`}
            </Text>
            <StarRating
              fullStarColor={Colors.ORANGE}
              starSize={15}
              containerStyle={{ position: "absolute", bottom: 0 }}
              disabled={true}
              maxStars={5}
              rating={movie?.imdb_rating / 2}
            />
          </View>
        </View>
        <View key={"desc"} style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.release}>
            {`${release_year} | ${movie?.length} | ${movie?.director}`}
          </Text>
          <Text style={styles.release}>{`Cast: ${movie?.cast?.join("")}`}</Text>
          <Text style={styles.desc}>
            {`Movie Description: ${movie?.overview}`}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  backdropImage: {
    width: "100%",
    height: 200,
  },
  posterImageContainer: {
    marginTop: -50,
    paddingHorizontal: 30,
    flexDirection: "row",
    width: "100%",
  },
  posterImage: {
    width: 100,
    height: 150,
    shadowColor: Colors.WHITE,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: Colors.WHITE,
  },

  ratingContainer: {
    flexDirection: "column",
    marginLeft: 20,
  },
  release: {
    fontSize: 17,
    marginTop: 10,
    color: Colors.WHITE,
    fontWeight: "500",
    flex: 1,
  },
  desc: {
    fontSize: 15,
    marginTop: 10,
    color: Colors.WHITE,
    fontWeight: "500",
    flex: 1,
  },
});
