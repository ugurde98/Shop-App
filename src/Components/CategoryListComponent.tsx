import { View, Text } from 'react-native'
import React from 'react'

const CategoryListComponent = ({tag,fontS}:any) => {
    console.log('tag: ', tag);
  return (
    <View style={{backgroundColor:'orange',margin:5,padding:5,borderRadius:5}} >
      <Text style={{color:"white",fontSize:fontS,fontWeight:'700'}}>{tag}</Text>
    </View>
  )
}

export default CategoryListComponent