import React from 'react'
import {View, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native'
import theme from '../util/theme';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// screen's width in percentage
function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

// screen's height in percentage
function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

/* Header */

const Header = (props) => {


    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/triangle2_hor_17.jpg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.para}>{props.para}</Text>
            </ImageBackground>
        </View>
    )
}

export default Header

const styles= StyleSheet.create({
    container : {
        height: hp(25),
        width: wp(100),
        backgroundColor: theme.PRIMARY_COLOR,
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title : {
        fontSize: theme.LARGE_FONTS,
        fontWeight: 'bold',
        color: theme.WHITE,
        wordWrap: 'breakWord',
        width: wp(90),
        textTransform: 'capitalize',
        fontFamily: 'monospace',
        paddingHorizontal: wp(5),
        paddingTop: wp(5)
    },
    para: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: theme.WHITE,
        wordWrap: 'breakWord',
        width: wp(90),
        textTransform: 'capitalize',
        fontFamily: theme.DEFAULT_FONT,
        paddingHorizontal: wp(5),
        paddingTop: 10
    },
    image : {
        height: hp(25),
        width: wp(100),
    }
})