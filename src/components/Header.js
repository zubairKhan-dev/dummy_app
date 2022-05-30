import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
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
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles= StyleSheet.create({
    container : {
        height: hp(10),
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
        color: theme.White
    }
})