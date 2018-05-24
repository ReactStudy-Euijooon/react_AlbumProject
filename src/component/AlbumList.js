import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album list!</Text>
//         </View>
//     );
// }

class AlbumList extends Component {
    state = { albums: [] };
    //state는 class based component일때만 사용 가능 
    componentWillMount() {
        //life cycle. 처음 실행 될 때 자동 실행됨 
        //Class based Component일 때만 접근 가능
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
            //state를 업데이트 할때는 this.setState만 가능함 
        //console.log('compenentWillMount in AlbumList');
        //debugger;
    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record = {album}  />
        );
    }

    render() {

        console.log(this.state);
        //react에서는 큰 이미지는 자동적으로 스크롤이 안되게 되어있음. scrollabe 또는 scrollview를 설정해줘야 함
        //flex 설정 안할 경우 스크롤 뷰 맨 아래가 짤려서 보일 수 있음 
        //최상위 root뷰에 설정해 줘야 함
        return (
            
            <ScrollView>  
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;