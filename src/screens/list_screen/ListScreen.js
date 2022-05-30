/* contact-list-screen */

import React from "react";
import {View, Text, FlatList} from 'react-native';
import styles from './styles'
import Header from "../../components/Header";
import {Card, Title, Paragraph } from 'react-native-paper';

const ListScreen= (props)=> {

    // json data
    const data= require('../../data/list.json')

    // given loaction
    const defaultLocation= [51.5144636,-0.142571]

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
      
      // converting degree into radians
      const toRad= (angle)=> {
        return (angle * Math.PI) / 180;
      }

    return (
        <View style= {styles.container}>
            <Header 
                title={'Contacts'}
            />
            <View style= {styles.listView}>
                <FlatList 
                    data={data.sort((a, b) => a.organization.localeCompare(b.organization))}
                    renderItem= {({item, index}) => {
                        return(
                            <Card style={{borderRadius: 7, marginTop: 10}}>
                                <Card.Content>
                                    <Title>{item.organization}</Title>
                                    <Paragraph>{item.offices[0].location}</Paragraph>
                                    <Paragraph>{Math.round(computeDistance(defaultLocation,
                                         [item.offices[0].coordinates.split(',')[0], item.offices[0].coordinates.split(',')[1]]))}
                                         {' km'}
                                         </Paragraph>
                                </Card.Content>     
                            </Card>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default ListScreen
