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
        backgroundColor: theme.WHITE,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView : {
        position: 'absolute',
        top: hp(30),
        width: '100%',
        height: hp(70),
        alignItems: 'center',
        backgroundColor: theme.OFF_WHITE
    },
    inputView : {
        position: 'absolute',
        top: hp(20),
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subHeading : {
        wordWrap: 'breakWord',
        width: wp(90),
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: theme.DEFAULT_FONT
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