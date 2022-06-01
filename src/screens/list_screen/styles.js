/* styles for the list screen */

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
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(100),
        width: wp(100)
    },
    listView : {
        position: 'absolute',
        top: hp(29),
        width: '100%',
        height: hp(71),
        alignItems: 'center',
    },
    inputView : {
        position: 'absolute',
        top: hp(21),
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subHeading : {
        wordWrap: 'breakWord',
        width: wp(90),
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        padding: 10,
        fontFamily: theme.DEFAULT_FONT,
        color: 'gray',
        letterSpacing: 0.5
    },
    icon : {
        height: 15,
        width: 15,
    },
    card : {
        borderRadius: 7,
        marginTop: 10,
        width: wp(90),
    },
    searchIcon: {
        height: 30,
        width: 30,
    },
    contentTitle : {
        fontFamily: theme.DEFAULT_FONT,
        color: theme.PRIMARY_COLOR
    }
})

export default styles