/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *//*


import React, {Component} from 'react';
import {Platform, FlatList, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
*/
/*export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native0000000!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*//*


export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {title:'Chapter 1' , description: 'Chapter 1' , keywords: 'key  1' },
            {title:'Chapter 2' , description: 'Chapter 2' , keywords: 'key  2' },
            {title:'Chapter 3' , description: 'Chapter 3' , keywords: 'key  3' },
            {title:'Chapter 4' , description: 'Chapter 4' , keywords: 'key  4' },
            {title:'Chapter 5' , description: 'Chapter 5' , keywords: 'key  5' },
            {title:'Chapter 6' , description: 'Chapter 6' , keywords: 'key  6' },
            {title:'Chapter 7' , description: 'Chapter 7' , keywords: 'key  7' },
            {title:'Chapter 8' , description: 'Chapter 8' , keywords: 'key  8' },
            {title:'Chapter 9' , description: 'Chapter 9' , keywords: 'key  9' },
            {title:'Chapter 10' , description: 'Chapter 10' , keywords: 'key  10' },
            {title:'Chapter 11' , description: 'Chapter 11' , keywords: 'key  11' },
            {title:'Chapter 12' , description: 'Chapter 12' , keywords: 'key  12' },
            {title:'Chapter 13' , description: 'Chapter 13' , keywords: 'key  13' },
            {title:'Chapter 14' , description: 'Chapter 14' , keywords: 'key  14' },
            {title:'Chapter 15' , description: 'Chapter 15' , keywords: 'key  15' },
            {title:'Chapter 16' , description: 'Chapter 16' , keywords: 'key  16' },
            {title:'Chapter 17' , description: 'Chapter 17' , keywords: 'key  17' },
            {title:'Chapter 18' , description: 'Chapter 18' , keywords: 'key  18' },
            {title:'Chapter 19' , description: 'Chapter 19' , keywords: 'key  19' },
            {title:'Chapter 20' , description: 'Chapter 20' , keywords: 'key  20' },
            {title:'Chapter 21' , description: 'Chapter 21' , keywords: 'key  21' },
            {title:'Chapter 22' , description: 'Chapter 22' , keywords: 'key  22' },
            {title:'Chapter 23' , description: 'Chapter 23' , keywords: 'key  23' },
            {title:'Chapter 24' , description: 'Chapter 24' , keywords: 'key  24' },
            {title:'Chapter 25' , description: 'Chapter 25' , keywords: 'key  25' },
            {title:'Chapter 26' , description: 'Chapter 26' , keywords: 'key  26' },
            {title:'Chapter 27' , description: 'Chapter 27' , keywords: 'key  27' },
            {title:'Chapter 28' , description: 'Chapter 28' , keywords: 'key  28' },
            {title:'Chapter 29' , description: 'Chapter 29' , keywords: 'key  29' },
            {title:'Chapter 30' , description: 'Chapter 30' , keywords: 'key  30' },
            {title:'Chapter 31' , description: 'Chapter 31' , keywords: 'key  31' },
            {title:'Chapter 32' , description: 'Chapter 32' , keywords: 'key  32' },
            {title:'Chapter 33' , description: 'Chapter 33' , keywords: 'key  33' },
            {title:'Chapter 34' , description: 'Chapter 34' , keywords: 'key  34' },
            {title:'Chapter 35' , description: 'Chapter 35' , keywords: 'key  35' },
            {title:'Chapter 36' , description: 'Chapter 36' , keywords: 'key  36' },
            {title:'Chapter 37' , description: 'Chapter 37' , keywords: 'key  37' },
            {title:'Chapter 38' , description: 'Chapter 38' , keywords: 'key  38' },
            {title:'Chapter 39' , description: 'Chapter 39' , keywords: 'key  39' },
            {title:'Chapter 40' , description: 'Chapter 40' , keywords: 'key  40' },
            {title:'Chapter 41' , description: 'Chapter 41' , keywords: 'key  41' },
            {title:'Chapter 42' , description: 'Chapter 42' , keywords: 'key  42' },
            {title:'Chapter 43' , description: 'Chapter 43' , keywords: 'key  43' },
            {title:'Chapter 44' , description: 'Chapter 44' , keywords: 'key  44' },
            {title:'Chapter 45' , description: 'Chapter 45' , keywords: 'key  45' },
            {title:'Chapter 46' , description: 'Chapter 46' , keywords: 'key  46' },
            {title:'Chapter 47' , description: 'Chapter 47' , keywords: 'key  47' },
            {title:'Chapter 48' , description: 'Chapter 48' , keywords: 'key  48' },
            {title:'Chapter 49' , description: 'Chapter 49' , keywords: 'key  49' },
            {title:'Chapter 50' , description: 'Chapter 50' , keywords: 'key  50' },
            {title:'Chapter 51' , description: 'Chapter 51' , keywords: 'key  51' },
            {title:'Chapter 52' , description: 'Chapter 52' , keywords: 'key  52' },
            {title:'Chapter 53' , description: 'Chapter 53' , keywords: 'key  53' },
            {title:'Chapter 54' , description: 'Chapter 54' , keywords: 'key  54' },
            {title:'Chapter 55' , description: 'Chapter 55' , keywords: 'key  55' },
            {title:'Chapter 56' , description: 'Chapter 56' , keywords: 'key  56' },
            {title:'Chapter 57' , description: 'Chapter 57' , keywords: 'key  57' },
            {title:'Chapter 58' , description: 'Chapter 58' , keywords: 'key  58' },
            {title:'Chapter 59' , description: 'Chapter 59' , keywords: 'key  59' },
            {title:'Chapter 60' , description: 'Chapter 60' , keywords: 'key  60' },
            {title:'Chapter 61' , description: 'Chapter 61' , keywords: 'key  61' },
            {title:'Chapter 62' , description: 'Chapter 62' , keywords: 'key  62' },
            {title:'Chapter 63' , description: 'Chapter 63' , keywords: 'key  63' },
            {title:'Chapter 64' , description: 'Chapter 64' , keywords: 'key  64' },
            {title:'Chapter 65' , description: 'Chapter 65' , keywords: 'key  65' },
            {title:'Chapter 66' , description: 'Chapter 66' , keywords: 'key  66' },
            {title:'Chapter 67' , description: 'Chapter 67' , keywords: 'key  67' },
            {title:'Chapter 68' , description: 'Chapter 68' , keywords: 'key  68' },
            {title:'Chapter 69' , description: 'Chapter 69' , keywords: 'key  69' },
            {title:'Chapter 70' , description: 'Chapter 70' , keywords: 'key  70' },
            {title:'Chapter 71' , description: 'Chapter 71' , keywords: 'key  71' },
            {title:'Chapter 72' , description: 'Chapter 72' , keywords: 'key  72' },
            {title:'Chapter 73' , description: 'Chapter 73' , keywords: 'key  73' },
            {title:'Chapter 74' , description: 'Chapter 74' , keywords: 'key  74' },
            {title:'Chapter 75' , description: 'Chapter 75' , keywords: 'key  75' },
            {title:'Chapter 76' , description: 'Chapter 76' , keywords: 'key  76' },
            {title:'Chapter 77' , description: 'Chapter 77' , keywords: 'key  77' },
            {title:'Chapter 78' , description: 'Chapter 78' , keywords: 'key  78' },
            {title:'Chapter 79' , description: 'Chapter 79' , keywords: 'key  79' },
            {title:'Chapter 80' , description: 'Chapter 80' , keywords: 'key  80' },
            {title:'Chapter 81' , description: 'Chapter 81' , keywords: 'key  81' },
            {title:'Chapter 82' , description: 'Chapter 82' , keywords: 'key  82' },
            {title:'Chapter 83' , description: 'Chapter 83' , keywords: 'key  83' },
            {title:'Chapter 84' , description: 'Chapter 84' , keywords: 'key  84' },
            {title:'Chapter 85' , description: 'Chapter 85' , keywords: 'key  85' },
            {title:'Chapter 86' , description: 'Chapter 86' , keywords: 'key  86' },
            {title:'Chapter 87' , description: 'Chapter 87' , keywords: 'key  87' },
            {title:'Chapter 88' , description: 'Chapter 88' , keywords: 'key  88' },
            {title:'Chapter 89' , description: 'Chapter 89' , keywords: 'key  89' },
            {title:'Chapter 90' , description: 'Chapter 90' , keywords: 'key  90' },
            {title:'Chapter 91' , description: 'Chapter 91' , keywords: 'key  91' },
            {title:'Chapter 92' , description: 'Chapter 92' , keywords: 'key  92' },
            {title:'Chapter 93' , description: 'Chapter 93' , keywords: 'key  93' },
            {title:'Chapter 94' , description: 'Chapter 94' , keywords: 'key  94' },
            {title:'Chapter 95' , description: 'Chapter 95' , keywords: 'key  95' },
            {title:'Chapter 96' , description: 'Chapter 96' , keywords: 'key  96' },
            {title:'Chapter 97' , description: 'Chapter 97' , keywords: 'key  97' },
            {title:'Chapter 98' , description: 'Chapter 98' , keywords: 'key  98' },
            {title:'Chapter 99' , description: 'Chapter 99' , keywords: 'key  99' },
            {title:'Chapter 100' , description: 'Chapter 100' , keywords: 'key  100' },
            {title:'Chapter 101' , description: 'Chapter 101' , keywords: 'key  101' },
            {title:'Chapter 102' , description: 'Chapter 102' , keywords: 'key  102' },
            {title:'Chapter 103' , description: 'Chapter 103' , keywords: 'key  103' },
            {title:'Chapter 104' , description: 'Chapter 104' , keywords: 'key  104' },
            {title:'Chapter 105' , description: 'Chapter 105' , keywords: 'key  105' },
            {title:'Chapter 106' , description: 'Chapter 106' , keywords: 'key  106' },
            {title:'Chapter 107' , description: 'Chapter 107' , keywords: 'key  107' },
            {title:'Chapter 108' , description: 'Chapter 108' , keywords: 'key  108' },
            {title:'Chapter 109' , description: 'Chapter 109' , keywords: 'key  109' },
            {title:'Chapter 110' , description: 'Chapter 110' , keywords: 'key  110' },
            {title:'Chapter 111' , description: 'Chapter 111' , keywords: 'key  111' },
            {title:'Chapter 112' , description: 'Chapter 112' , keywords: 'key  112' },
            {title:'Chapter 113' , description: 'Chapter 113' , keywords: 'key  113' },
            {title:'Chapter 114' , description: 'Chapter 114' , keywords: 'key  114' },
            {title:'Chapter 115' , description: 'Chapter 115' , keywords: 'key  115' },
            {title:'Chapter 116' , description: 'Chapter 116' , keywords: 'key  116' },
            {title:'Chapter 117' , description: 'Chapter 117' , keywords: 'key  117' },
            {title:'Chapter 118' , description: 'Chapter 118' , keywords: 'key  118' },
            {title:'Chapter 119' , description: 'Chapter 119' , keywords: 'key  119' },
            {title:'Chapter 120' , description: 'Chapter 120' , keywords: 'key  120' },
            {title:'Chapter 121' , description: 'Chapter 121' , keywords: 'key  121' },
            {title:'Chapter 122' , description: 'Chapter 122' , keywords: 'key  122' },
            {title:'Chapter 123' , description: 'Chapter 123' , keywords: 'key  123' },
            {title:'Chapter 124' , description: 'Chapter 124' , keywords: 'key  124' },
            {title:'Chapter 125' , description: 'Chapter 125' , keywords: 'key  125' },
            {title:'Chapter 126' , description: 'Chapter 126' , keywords: 'key  126' },
            {title:'Chapter 127' , description: 'Chapter 127' , keywords: 'key  127' },
            {title:'Chapter 128' , description: 'Chapter 128' , keywords: 'key  128' },
            {title:'Chapter 129' , description: 'Chapter 129' , keywords: 'key  129' },
            {title:'Chapter 130' , description: 'Chapter 130' , keywords: 'key  130' },
            {title:'Chapter 131' , description: 'Chapter 131' , keywords: 'key  131' },
            {title:'Chapter 132' , description: 'Chapter 132' , keywords: 'key  132' },
            {title:'Chapter 133' , description: 'Chapter 133' , keywords: 'key  133' },
            {title:'Chapter 134' , description: 'Chapter 134' , keywords: 'key  134' },
            {title:'Chapter 135' , description: 'Chapter 135' , keywords: 'key  135' },
            {title:'Chapter 136' , description: 'Chapter 136' , keywords: 'key  136' },
            {title:'Chapter 137' , description: 'Chapter 137' , keywords: 'key  137' },
            {title:'Chapter 138' , description: 'Chapter 138' , keywords: 'key  138' },
            {title:'Chapter 139' , description: 'Chapter 139' , keywords: 'key  139' },
            {title:'Chapter 140' , description: 'Chapter 140' , keywords: 'key  140' },
            {title:'Chapter 141' , description: 'Chapter 141' , keywords: 'key  141' },
            {title:'Chapter 142' , description: 'Chapter 142' , keywords: 'key  142' },
            {title:'Chapter 143' , description: 'Chapter 143' , keywords: 'key  143' },
            {title:'Chapter 144' , description: 'Chapter 144' , keywords: 'key  144' },
            {title:'Chapter 145' , description: 'Chapter 145' , keywords: 'key  145' },
          ]}
          renderItem={({item}) => <Text style={styles.item}>  {item.title}</Text>}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
})
*/



//import React, { Component } from 'react';
//import { AppRegistry } from 'react-native';
//import App from './App';*/

import Header from './app/Header';
import AlbumArt from './app/AlbumArt';
import TrackDetails from './app/TrackDetails';
import SeekBar from './app/SeekBar';
import Controls from './app/Controls';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Playing from Charts" />
        <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
        <TrackDetails title="Stressed Out"
          artist="Twenty One Pilots" />
        <SeekBar trackLength={204} currentPosition={156} />
        <Controls />
      </View>
    );
  }
}



AppRegistry.registerComponent('ReactMusic', () => App);
