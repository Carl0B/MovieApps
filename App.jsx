import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet,Dimensions, View} from 'react-native';

const App = () => {

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
    },
    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://i.pinimg.com/originals/60/2b/8e/602b8edbb4534f7545162e29e5b2edae.jpg',
    },
    {
      id: 5,
      name: 'Rush: pasión y gloria',
      director: 'Ron Howard',
      url: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1b87317de58dda88b00d571d6944c9612c746f9fef53f402d679343254e6288f._RI_V_TTW_.jpg',
    },
    {
      id: 6,
      name: 'Ford v Ferrari',
      director: 'James Mangold',
      url: 'https://i.pinimg.com/originals/25/2a/7c/252a7c53145e83784f76c8e3ad42331f.jpg',
    },
    {
      id: 7,
      name: 'Baby Driver',
      director: 'Edgar Wright',
      url: 'https://www.themoviedb.org/t/p/original/uS2CuZ5Zx01vydOFGplbHMLF86V.jpg',
    },
    {
      id: 8,
      name: 'Beasts of No Nation',
      director: 'Cary Joji Fukunaga',
      url: 'https://4.bp.blogspot.com/--hyzSVJ2bgs/WWBHD-IjZ6I/AAAAAAAB_vs/09I_pe5Um7IvggYdywgBAaq-sKGypFziACLcBGAs/s1600/Beasts%2Bof%2BNo%2BNation%2B009.jpg',
    },
    {
      id: 9,
      name: 'Burn Out',
      director: 'Yann Gozlan',
      url: 'https://m.media-amazon.com/images/M/MV5BYzFmOGFjMjEtNDI4Mi00YTNiLThiNzQtMDU2MWMyOGUxZGY5XkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_.jpg',
    },
    {
      id: 10,
      name: 'Corazones malheridos',
      director: 'Elizabeth Allen Rosenbaum',
      url: 'https://www.cineyteatro.es/wp-content/uploads/2022/07/CORAZONES-MALHERIDOS-2022-1-724x1024.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Welcome to Movies App! 🍿</Text>
      </View>

      <View style={styles.listjump}>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        
        renderItem={({item}) => (
        <>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.url,
            }}
          />
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textDirector}>{item.director}</Text>
        </View>
        </>
        )}
        numColumns='2'
        
        //horizontal={true}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.98)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  containertitle:{
    top : 60,
  },
  listjump:{
    bottom:10,
  },
  movieContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    padding: 50,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  image: {
    width: 130,
    height: 240,
    alignSelf: 'center', 
    marginTop: 15, 
    marginBottom: 15,
    borderRadius:5,
  },
  textDirector:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textName:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width:180,
  },
  flatListContainer:{
    column: 2,
    flex: 1,
    marginTop: 15,
    marginBottom: 15,

  }
});

export default App;