/* styles for the list screen */

import React from 'react'
import {StyleSheet, Dimensions} from "react-native";
import theme from '../../util/theme';

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

const styles= StyleSheet.create({
    container : {
        backgroundColor: theme.WHITE,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(100),
        width: wp(100)
    },
    card : {
        height: hp(5),
        width: wp(90),
        elevation: 3,
        shadowColor: '#808080',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 7,
        borderRadius: 7
    },
    listView : {
        position: 'absolute',
        top: hp(10),
        width: '100%',
        height: hp(90),
    }
})

export default styles