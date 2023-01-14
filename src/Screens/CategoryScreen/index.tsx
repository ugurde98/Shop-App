import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Categories } from '../../Services/CategoriesApi';
import Category from './Category';

const CategoryScreen = () => {
  
  return (
    <View>
      <Category/>
    </View>
  )
}

export default CategoryScreen