import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';

//flex 1을 하는 이유는 이 뷰가 꽉 차게 들어가게끔 하는 역할

const App = () => (
    <View style = {{flex:1}}>
        <Header headerText={'Albums'} />
        <AlbumList/>
    </View>
    /* 한번에 child 두개를 리턴할 수 없다. 
    <Header>와 <AlbumList> 를 동시에 할 수 없음  */
);

AppRegistry.registerComponent('secondProject', () => App);