import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getMovies } from '../apihelper/Api';
import ListHeader from '../comps/ListHeader';
import * as Colors from '../constants/ColorDefs';
import MovieCard from '../comps/MovieCard';
import Loader from '../comps/Loader';
import * as Utility from '../helpers/Utility';

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState()
  const [genres, setGenres] = useState()

  useEffect(() => {
    setIsLoading(true)
    getMovies((res) => {
      setIsLoading(false)
      if (res?.movies?.length) {
        Utility.filterMoviesBasedOnGenre(res?.movies, (movies, genres) => {
          console.log('====>', movies, genres)
          setMovies(movies)
          setGenres(genres)
        })
      } else {
        Alert.alert('Movie Search app', 'There is no movie to display, Please try again.')
      }
    })
  }, [])


  return (
    <>
      <StatusBar barStyle='light-content' />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.BLACK,
        }}
      >
        {isLoading && <Loader />}
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={{
            paddingHorizontal: 20,
            marginTop: 30,
            paddingBottom:30,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {movies && genres && Object.keys(genres)?.map((genre) => {
            return (
              <>
                <ListHeader color={Colors.WHITE} genreName={genre} count={genres[genre].size} />
                <FlatList
                  horizontal={true}
                  style={styles.list}
                  keyExtractor={(i, ind) => `key${ind}`}
                  data={Array.from(genres[genre])}
                  renderItem={({ item }) => {
                    const mvs = movies[item]
                    return (
                      <MovieCard
                        item={mvs}
                        onMovieCardClick={() => {
                          navigation.navigate('MovieDetails', { movie: mvs })
                        }}
                      />
                    )
                  }}
                />
              </>
            )
          })
          }
        </ScrollView>
      </View>
    </>

  );
};

export default Home;


const styles = StyleSheet.create({
  container: {

  },
  list: { width: '100%', height: 190 },
  scrollcontainer: {

  }
})