import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Categories } from '../../Services/CategoriesApi';
import CategoryComponent from '../../Components/CategoryComponent';

const Category = () => {
    const [data, setData] = useState([]);
    const Datax = async () => {
      const category = await Categories();
      console.log('category: ', category);
      setData(category);
    };
    useEffect(() => {
      Datax();
    }, []);
  return (
    <View>
      <FlatList 
        data={data}
        renderItem={({ item }:any)=><CategoryComponent item={item}/>}
        ListHeaderComponent={()=>(<Text style={{ fontSize:20,fontWeight:'600'}} >Categories</Text>)}
              />
    </View>
  )
}

export default Category 