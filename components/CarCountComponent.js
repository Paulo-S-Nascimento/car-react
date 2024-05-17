import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CarContext } from './CarContext';

export default function CarCountComponent(){

    const { carros } = useContext(CarContext)
    const [ CarCount, SetCarCount ] = useState[0] 

    useEffect(() => {   
        SetCarCount(carros.length)
    }, [carros] )

    return (
        <View>
            <Text style={estilo.titulo}> 13 </Text>
        </View>
    )
}


const estilo = StyleSheet.create({
    titulo: {
        fontSize: 20
    }
 })