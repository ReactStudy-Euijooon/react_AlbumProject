import React from "react";
import { Text, View, Image ,Linking} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
const AlbumDetail = ({ record }) => {
    //destructure! props 대신에 {record}로 된다.
    //functional component는 단순히 정보를 보여줄때 사용
    const { title, artist, thumbnail_image, image,url } = record;
    const {
        headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ url: thumbnail_image }} />
                //image 는 자동으로 들어가지 않고 사이즈를 정해줘야 됨
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ url: image }} />
            </CardSection>

            <CardSection>
                <Button whenPress = {()=>{Linking.openURL(url)}}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
    //CardSection의 버튼의 whenPress는 그냥 props 변수 이름일 뿐임
    //Button 안에 web들어가는 함수를 짜는게 아니라 웹 들어가는 함수를 props로 넘겨서
    //Button을 재사용 가능하게끔 만드는 게 더 좋음
};

const styles = {
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alighItem: "center",
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
