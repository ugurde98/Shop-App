import { View, Text,Dimensions} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const CategoryTagComponent = ({tag,ok,textSize,marginV}:any) => {
  const { height, width } = Dimensions.get("window");
  var items = Array("#e63946","#a8dadc","#457b9d","#1d3557","#252525")
  var palette = items[Math.floor(Math.random()*items.length)];

    return(
        <View
        style={{
          
          flexDirection: ok?"row":"column",
          justifyContent: "space-between",
          margin: 2,
          

        }}
      >
       {ok && <FontAwesome name="truck" size={20} color="green" />}
        <View
          style={{ backgroundColor: palette, padding: 2, borderRadius: 5 }}
        >
          <Text
            style={{
              color: "white",
              marginHorizontal: 2,
              fontSize: textSize,
              fontWeight: "700",
            }}
          >
            {tag}
          </Text>
        </View>
      </View>

    )
    
}

export default CategoryTagComponent

