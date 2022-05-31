/* contact-list-screen */

import React, { useState } from 'react';
import {View, Text, FlatList, Button, TextInput} from 'react-native';
import styles from './styles'
import Header from "../../components/Header";
import {Card, Title, Paragraph } from 'react-native-paper';
import Input from "../../components/Input";
import LinearGradient from 'react-native-linear-gradient';
import { getRestaurants } from '../../api/Restaurants';
import { defaultLocation } from '../../config/Constants';
import toRad from '../../util/Common'


const ListScreen= (props)=> {

    // minimum distance value
    const [minValue, setMinValue]= useState('0');

    // maximum distance value
    const [maxValue, setMaxValue]= useState('99999');

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

      // render list of restraunts
      const renderItem = ({ item }) => {
            const distance= computeDistance(defaultLocation, 
            [item.offices[0].coordinates.split(',')[0], item.offices[0].coordinates.split(',')[1]])

                        if(distance > minValue && distance < maxValue) {
                            return(
                                <Card style={{borderRadius: 7, marginTop: 10}}>
                                    <Card.Content>
                                        <Title>{item.organization}</Title>
                                        <Paragraph>{item.offices[0].location}</Paragraph>
                                        <Paragraph>{Math.round(distance)}
                                             {' km'}
                                             </Paragraph>
                                    </Card.Content>    
                                </Card>
                            )
                        }
                    }

    return (
        <View style= {styles.container}>
            <Header 
                title={'Contacts'}
            />
            <View style= {styles.inputView}>
                <Input 
                    onChangeText={(e)=> {setMinValue(e)}} // setting minimum distance input
                    value= {minValue}
                    placeholder={'min'}
                
                />
                <View style= {{width: 20}}/>
                <Input 
                    onChangeText= {(e)=> {setMaxValue(e)}} // setting maximum distance input
                    value= {maxValue}
                    placeholder= {'max'}
                />
            </View>
           
            
            <View style= {styles.listView}>
                <FlatList 
                    data={data.sort((a, b) => a.organization.localeCompare(b.organization))}
                    extraData={data.sort((a, b) => a.organization.localeCompare(b.organization))}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default ListScreen
