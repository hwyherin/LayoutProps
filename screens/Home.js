import React from 'react'
import {Text, Button} from 'react-native'

function Home({navigation}) {
    return (
        <>
        
            <Text> Hello Home</Text>
            <Button
                 title="Go To Layout"
                 onPress={()=>navigation.navigate('Layout')}
            />

            <Text> Hello Home</Text>
            <Button
                 title="Go To Custom"
                 onPress={()=>navigation.navigate('Custom')}
            />

        </>
    );
}
export default Home;
