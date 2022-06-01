/* search-input-component */

import React from 'react'
import {  View, StyleSheet, Dimensions , TextInput } from 'react-native'
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

const Input= (props)=> {

    return(
        <View>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                style={styles.input}
                keyboardType={'numeric'}
                maxLength={5}
                placeholder={props.placeholder}
            />
        </View>
    )
}

export default Input

const styles= StyleSheet.create({
    input : {
        height: hp(8),
        width: wp(80),
        elevation: 3,
        shadowColor: '#808080',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: hp(4),
        backgroundColor: theme.WHITE,
        padding: 20,
        fontSize: theme.MEDIUM_FONTS,
        fontFamily: theme.DEFAULT_FONT,
        letterSpacing: 1,
        fontWeight: '500'
    
    }
})