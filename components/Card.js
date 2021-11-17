import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const placeHolderImage = require('../assets/images/placeholder.png');

const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.container}>
        <Image
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeHolderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    top: 10,
    width: 100,
    textAlign: 'center',
  },
});

Card.propTypes = propTypes;

export default Card;
