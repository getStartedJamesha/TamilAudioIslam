/*
import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';

export default class App extends Component <{}>{
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}*/



import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [


  // Chapter 1 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3
  // Chapter 2 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3
  // Chapter 3 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3
  // 4 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3
  // 5 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3
  // 6 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3
  // 7 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3
  // 8 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3
  // 9 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3
  // 10 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3
  // Chapter 139 - https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/36c45f5451650e/primary/1542086618.mp3
  {
      title: 'Tamil Audio Islam',
      artist: 'Chapter 1',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 2',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 3',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 4',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 5',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 6',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 7',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 8',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 9',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 10',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 11',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 12',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 13',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 14',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 15',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 16',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 17',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 18',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 19',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 20',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 21',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 22',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 23',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 24',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 25',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 26',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 27',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 28',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 29',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 30',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 31',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 32',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 33',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 34',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 35',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 36',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 37',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 38',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 39',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 40',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 41',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 42',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 43',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 44',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 45',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 46',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 47',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 48',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 49',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 50',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 51',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 52',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 53',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 54',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 55',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 56',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 57',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 58',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 59',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 60',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 61',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 62',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 63',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 64',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 65',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 66',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 67',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 68',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 69',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 70',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 71',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 72',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 73',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 74',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 75',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 76',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 77',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 78',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 79',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 80',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 81',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 82',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 83',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 84',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 85',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 86',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 87',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 88',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 89',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 90',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 91',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 92',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 93',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 94',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 95',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 96',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 97',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 98',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 99',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 100',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 101',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 102',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 103',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 104',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 105',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 106',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 107',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 108',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 109',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 110',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 111',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 112',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 113',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 114',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 115',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 116',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 117',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 118',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 119',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 120',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 121',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 122',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 123',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 124',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 125',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 126',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 127',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 128',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312758b464.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 129',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531297ca1a6.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 130',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565312ea30abc.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 131',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 132',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 133',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 134',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 135',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 136',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531246fa5fa.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 137',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653126004582.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 138',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/36c45f2b8c7190/primary/1541556214.mp3',
  },{
    title: 'Tamil Audio Islam',
    artist: 'Chapter 139',
    albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
    audioUrl: 'https://tracking.podiant.co/d/spoke/tamilaudioislam/episodes/36c45f5451650e/primary/1542086618.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 140',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/36c45f6f58c5f2/primary/1541556333.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 141',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531197f7ff8.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 142',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/3565311c360c58.mp3',
  },{
      title: 'Tamil Audio Islam',
      artist: 'Chapter 143',
      albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
      audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653120525832.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 144',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/356531213a996c.mp3',
  },{
     title: 'Tamil Audio Islam',
     artist: 'Chapter 145',
     albumArtUrl: 'https://media.podiant.co/spoke/tamilaudioislam/artwork/356bb6e5071cc2.jpg',
     audioUrl: 'https://media.podiant.co/spoke/tamilaudioislam/episodes/audio/35653122ef8b5a.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}
