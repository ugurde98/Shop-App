import { View, Text } from 'react-native'
import React from 'react'
import ListProduct from './ListProduct'

const ListCategoryScreen = ({route}:any) => {
    let item:any =route.params.item
    
  return (
    <View>
     <ListProduct item={item} />
    </View>
  )
}

export default ListCategoryScreen