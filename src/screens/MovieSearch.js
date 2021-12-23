import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Colors from "../constants/ColorDefs";
import { searhMovies } from "../apihelper/Api";
import ListHeader from "../comps/ListHeader";
import MovieCard from "../comps/MovieCard";
import SearchBar from "../comps/SearchBar";
import Loader from "../comps/Loader";
import * as Utility from "../helpers/Utility";

const MovieSearch = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [showNoData, setShowNoData] = useState(false);

  const searchMovie = (searchText) => {
    setIsLoading(true);
    searhMovies(searchText, (res) => {
      setIsApiCalled(true)
      setIsLoading(false);
      if (res?.movies?.length) {
        setShowNoData(false)
        Utility.filterMoviesBasedOnGenre(res?.movies, (movies, genres) => {
          setMovies(movies);
          setGenres(genres);
        });
      } else {
        setMovies();
        setGenres();
        setShowNoData(true)
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BLACK,
        paddingHorizontal: 20,
      }}
    >
      <SearchBar
        initialText=""
        onFocus = {() =>{
          setShowNoData(false)
        }}
        onEndEditing={(queryText) => {
          if (queryText?.length){
            searchMovie(queryText);
          }
        }}
      />

      {isLoading && <Loader />}
      <ScrollView
        style={{ width: "100%", marginTop: 30 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:30,
        }}
      >
        {movies &&
          genres &&
          Object.keys(genres)?.map((genre) => {
            return (
              <>
                <ListHeader
                  color={Colors.WHITE}
                  genreName={genre}
                  count={genres[genre].size}
                />
                <FlatList
                  horizontal={true}
                  style={styles.list}
                  keyExtractor={(i, ind) => `key${ind}`}
                  data={Array.from(genres[genre])}
                  renderItem={({ item }) => {
                    const mvs = movies[item];
                    return (
                      <MovieCard
                        item={mvs}
                        onMovieCardClick={() => {
                          navigation.navigate("MovieDetails", { movie: mvs });
                        }}
                      />
                    );
                  }}
                />
              </>
            );
          })}

          {isApiCalled && showNoData && 
          <Text 
          style = {styles.nodata}>
            No movie found against your search, Please try another search.
          </Text>
          }
      </ScrollView>
    </View>
  );
};

export default MovieSearch;

const styles = StyleSheet.create({
  container: {},
  list: { width: "100%", height: 200 },
  scrollcontainer: {},
  seatchTextField: {
    fontSize: 20,
    fontWeight: "400",
    height: "100%",
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
  },
  nodata :{
    fontSize:15,
    fontWeight:'500',
    color:Colors.WHITE
  }
});
