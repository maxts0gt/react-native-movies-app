import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import Card from './Card';

class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;

    return (
      <View>
        <View styles={styles.list}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Card item={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontsize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  list: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});

export default List;
