/* restaurants-list-screen */

import React, { useState } from 'react';
import {View, Text, FlatList, Button, TextInput, Image} from 'react-native';
import styles from './styles'
import Header from "../../components/Header";
import {Card, Title, Paragraph } from 'react-native-paper';
import Input from "../../components/Input";
import { getRestaurants } from '../../api/Restaurants';
import { defaultLocation } from '../../config/Constants';
import toRad from '../../util/Common'
import theme from '../../util/theme';


const ListScreen= (props)=> {


    // maximum distance value
    const [maxValue, setMaxValue]= useState('');

    // json data
    const data= getRestaurants();

    // calculating distance between two coordinates in kilometers
    const computeDistance= ([prevLat, prevLong], [lat, long])=> {
        const prevLatInRad = toRad(prevLat);
        const prevLongInRad = toRad(prevLong);
        const latInRad = toRad(lat);
        const longInRad = toRad(long);
      
        return (
          // In kilometers
          6377.830272 *
          Math.acos(
            Math.sin(prevLatInRad) * Math.sin(latInRad) +
              Math.cos(prevLatInRad) * Math.cos(latInRad) * Math.cos(longInRad - prevLongInRad),
          )
        );
      }

      // render filtered list of restraunts
        const renderItem = ({ item }) => {
            const distance= computeDistance(defaultLocation, 
            [item.offices[0].coordinates.split(',')[0], item.offices[0].coordinates.split(',')[1]])

                        if(distance < maxValue) {
                            return(
                                <Card style={styles.card}>
                                    <Card.Content>
                                        <Title style={styles.contentTitle}>{item.organization}</Title>
                                        <View style= {{flexDirection: 'row', alignItems: 'center',  marginTop: 10}}>
                                            <Image source={require('../../assets/img/locations.png')} 
                                            style= {styles.icon}
                                            />
                                            <View style= {{width: 10}}/>
                                            <Paragraph style={{fontFamily: theme.DEFAULT_FONT}}>{item.offices[0].location}</Paragraph>
                                        </View>
                                    
                                        <View style= {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                            <Image source={require('../../assets/img/distance.png')} 
                                            style= {styles.icon}
                                            />
                                            <View style= {{width: 10}}/>
                                            <Paragraph style={{fontFamily: theme.DEFAULT_FONT}}>{Math.round(distance)}
                                             {' km'}
                                             </Paragraph>
                                        </View>
                                    </Card.Content>    
                                </Card>
                            )
                        }
                    }

        // render list of restraunts
        const renderList = ({ item }) => {
            const distance= computeDistance(defaultLocation, 
            [item.offices[0].coordinates.split(',')[0], item.offices[0].coordinates.split(',')[1]])
                        return(
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title style={styles.contentTitle}>{item.organization}</Title>
                                    <View style= {{flexDirection: 'row', alignItems: 'center',  marginTop: 10}}>
                                        <Image source={require('../../assets/img/locations.png')} 
                                        style= {styles.icon}
                                        />
                                        <View style= {{width: 10}}/>
                                        <Paragraph style={{fontFamily: theme.DEFAULT_FONT}}>{item.offices[0].location}</Paragraph>
                                    </View>
                                
                                    <View style= {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                        <Image source={require('../../assets/img/distance.png')} 
                                        style= {styles.icon}
                                        />
                                        <View style= {{width: 10}}/>
                                        <Paragraph style={{fontFamily: theme.DEFAULT_FONT}}>{Math.round(distance)}
                                         {' km'}
                                         </Paragraph>
                                    </View>
                                </Card.Content>    
                            </Card>
                        )
                }

    return (
        <View style= {styles.container}>
            {/* screen's header */}
            <Header 
                title= {'Find Restaurants'}
                para= {'Here you can find restaurants within range of your choosing'}
            />
            {/* search input */}
            <View style= {styles.inputView}>
                <Input 
                    onChangeText={(e)=> {
                        setMaxValue(e) // setting maximum distance input
                    }} 
                    value= {maxValue}
                    placeholder={'🔍 Search'}
                />
            </View>
            {/* list rendering view */}
            <View style= {styles.listView}>
                <Text style={styles.subHeading}>Enter maximum range in km</Text>
                <FlatList 
                    data={data.sort((a, b) => a.organization.localeCompare(b.organization))} // sorted data
                    extraData={data.sort((a, b) => a.organization.localeCompare(b.organization))} // sorted extra data
                    renderItem={maxValue.length > 0 ? renderItem : renderList}
                />
            </View>
        </View>
    )
}

export default ListScreen
