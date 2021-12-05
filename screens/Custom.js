import React from 'react'
import {Text, Button} from 'react-native'

function Home({navigation}) {
    return (
        <>
        
            <Text> Hello Home</Text>
            <Button
                 title="GO TO CUSTOM"
                 onPress={()=>navigation.navigate('Custom')}
            />

        </>
    );
}
export default Home;