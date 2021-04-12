import React from 'react';
import type {Node} from 'react';
import file from './database.json';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA =  Object.entries(file).map(([key, val]) => ({key, ...val}));

//console.log(file)
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemtitle}>{title}</Text>
  </View>
);
const keyExtractor = (item, index) => index.toString();

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.text} />
  );

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Browse Food </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  itemtitle: {
  fontFamily: 'Avenir',
  fontSize: 16,
  color: '#1F4F46',
  borderBottomWidth: 2,
  borderBottomColor: '#E8E8E8',
  paddingVertical: 20,
  },
  item: {
    //fontFamily: Avenir,
    fontSize: 16,
    color: '#6A6A6A',
    paddingHorizontal: 20,
     },
   title: {
   fontFamily: 'Avenir Heavy',
   fontSize: 32,
   color: '#1F4F46'
   }
   }
);

export default App;


